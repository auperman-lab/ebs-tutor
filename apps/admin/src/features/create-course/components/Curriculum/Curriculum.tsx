import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Button, Collapse, Flex, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useCourse } from '@context';
import { api } from '@api';
import { Lesson, Topic } from '@types';
import { LessonItem } from './LessonItem';
import { TopicList } from './TopicList';
import { useStyles } from './styles';
import type { TabsProps } from '@features/create-course/types';

const { Title } = Typography;

export function Curriculum({
  onHandleNext,
  onHandleBack,
  activeKey,
}: TabsProps) {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const params = useParams();
  const queryClient = useQueryClient();
  const { setCourse, course } = useCourse();

  const [editingLesson, setEditingLesson] = useState<number | null>(null);
  const [editingTopic, setEditingTopic] = useState<{
    lesson: number;
    topic: number;
  } | null>(null);

  useEffect(() => {
    if (Array.isArray(course?.lessons)) {
      form.setFieldsValue({ lessons: course.lessons });
    } else {
      form.setFieldsValue({ lessons: [] });
    }
  }, [form, course?.lessons]);

  const createTopics = useMutation({
    mutationFn: (data: Topic) => api.courses.createTopic(data),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const updateTopics = useMutation({
    mutationFn: (data: Topic) => api.courses.updateTopic(data),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const deleteTopics = useMutation({
    mutationFn: (id: number) => api.courses.deleteTopic(id),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const createLessons = useMutation({
    mutationFn: (data: Lesson) => api.courses.createLesson(data),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const updateLessons = useMutation({
    mutationFn: (data: Lesson) => api.courses.updateLesson(data),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const deleteLesson = useMutation({
    mutationFn: (id: number) => api.courses.deleteLesson(id),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const onSave = async () => {
    try {
      const values = await form.validateFields();
      if (!course) return;

      const newLessons = values.lessons.filter((lesson: Lesson) => !lesson.id);
      const existingLessons = values.lessons.filter(
        (lesson: Lesson) => lesson.id
      );

      await Promise.all(
        existingLessons.map((lesson: Lesson, index: number) =>
          updateLessons.mutateAsync({
            id: lesson.id,
            title: lesson.title,
            course_id: course.id,
            order: lesson.order || index + 1,
          })
        )
      );

      const createdLessons = await Promise.all(
        newLessons.map((lesson: Lesson, index: number) =>
          createLessons.mutateAsync({
            title: lesson.title,
            course_id: course.id,
            order: (course.lessons?.length ?? 0) + index + 1,
          })
        )
      );

      await Promise.all(
        values.lessons.map(async (lesson: Lesson, lessonIndex: number) => {
          const lessonId =
            lesson.id ||
            createdLessons[lessonIndex - existingLessons.length]?.id;
          if (!lessonId) return;

          const newTopics = lesson.topics?.filter((t: Topic) => !t.id) || [];
          const existingTopics =
            lesson.topics?.filter((t: Topic) => t.id) || [];

          await Promise.all(
            existingTopics.map((topic: Topic, topicIndex: number) =>
              updateTopics.mutateAsync({
                id: topic.id,
                title: topic.title,
                description: topic.description,
                duration: `${topic.duration}`,
                active: topic.active,
                can_skip: topic.can_skip,
                value: topic.title,
                order: topic.order || topicIndex + 1,
                topicable_type:
                  'EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText',
              })
            )
          );

          await Promise.all(
            newTopics.map((topic: Topic, topicIndex: number) =>
              createTopics.mutateAsync({
                lesson_id: lessonId,
                title: topic.title,
                description: topic.description,
                duration: `${topic.duration}`,
                active: topic.active,
                can_skip: topic.can_skip,
                value: topic.title,
                order: existingTopics.length + topicIndex + 1,
                topicable_type:
                  'EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText',
              })
            )
          );
        })
      );

      const updatedCourse = await api.courses.getCourse(params.id!);
      setCourse(updatedCourse);
    } catch (error) {
      console.error('Error saving curriculum:', error);
    }
  };

  const onDeleteLesson = (
    lessonIndex: number,
    fieldName: number,
    removeLesson: (name: number) => void
  ) => {
    const lessonId = form.getFieldValue(['lessons', lessonIndex, 'id']);
    if (lessonId) deleteLesson.mutate(lessonId);
    removeLesson(fieldName);
  };

  const onDeleteTopic = (
    lessonIndex: number,
    topicFieldName: number,
    removeTopic: (name: number) => void
  ) => {
    const topicId = form.getFieldValue([
      'lessons',
      lessonIndex,
      'topics',
      topicFieldName,
      'id',
    ]);
    if (topicId) {
      deleteTopics.mutate(topicId);
    }
    removeTopic(topicFieldName);
  };

  const toggleLessonEdit = (index: number) => {
    setEditingLesson((prev) => (prev === index ? null : index));
  };

  const toggleTopicEdit = (lessonIndex: number, topicIndex: number) => {
    setEditingTopic((prev) =>
      prev?.lesson === lessonIndex && prev?.topic === topicIndex
        ? null
        : { lesson: lessonIndex, topic: topicIndex }
    );
  };

  return (
    <Form form={form} className={styles.container} layout="vertical">
      <Flex vertical gap={24}>
        <Title level={4}>Curriculum</Title>
        <Form.List name="lessons">
          {(lessonFields, { add: addLesson, remove: removeLesson }) => (
            <>
              <Collapse
                accordion
                items={lessonFields.map((field, index) => ({
                  key: field.key.toString(),
                  label: (
                    <LessonItem
                      index={index}
                      name={field.name}
                      form={form}
                      isEditing={editingLesson === index}
                      onToggleEdit={toggleLessonEdit}
                      onCancelEdit={() => setEditingLesson(null)}
                      onDelete={() =>
                        onDeleteLesson(index, field.name, removeLesson)
                      }
                    />
                  ),
                  children: (
                    <TopicList
                      form={form}
                      lessonIndex={index}
                      lessonName={field.name}
                      editingTopic={editingTopic}
                      onToggleTopicEdit={toggleTopicEdit}
                      onCancelTopicEdit={() => setEditingTopic(null)}
                      onDeleteTopic={(topicFieldName, remove) =>
                        onDeleteTopic(index, topicFieldName, remove)
                      }
                    />
                  ),
                }))}
              />

              <Button
                type="dashed"
                icon={<PlusOutlined />}
                block
                style={{ marginTop: 16 }}
                onClick={() => addLesson({ title: '', topics: [] })}
              >
                Add Lesson
              </Button>
            </>
          )}
        </Form.List>

        <Flex className={styles.optionsButtons} justify="space-between">
          <Button
            size="large"
            className={styles.save}
            onClick={onHandleBack}
            style={activeKey === '1' ? { visibility: 'hidden' } : {}}
          >
            Back
          </Button>
          <Flex gap={32}>
            <Button size="large" className={styles.save} onClick={onSave}>
              Save
            </Button>
            <Button
              size="large"
              type="primary"
              onClick={async () => {
                await onSave();
                onHandleNext();
              }}
            >
              Save & Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
}
