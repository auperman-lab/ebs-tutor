import {
  Divider,
  Flex,
  Typography,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
} from 'antd';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { CreateCourseRequest, Course, Tag } from '@types';
import { routes } from '@const';
import { api } from '@api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { courseLanguages, courseLevels, duration } from './data';
import { useEffect } from 'react';

const { Title } = Typography;

type BasicInformationProps = {
  onHandleNext: () => void;
};

export const BasicInformation = ({ onHandleNext }: BasicInformationProps) => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();

  const { data: courseData, isSuccess } = useQuery({
    queryKey: ['course', params.id],
    queryFn: () => api.courses.getCourse(params.id ?? '0'),
    enabled: !!params.id,
  });

  const { data: rawCategories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: api.courses.getCategories,
    staleTime: Infinity,
  });

  const categories = rawCategories.map((cat) => ({
    label: cat.name,
    value: cat.id,
  }));

  const { data: rawTags = [] } = useQuery({
    queryKey: ['tags'],
    queryFn: api.courses.getTags,
    staleTime: Infinity,
  });

  const tags = rawTags.map((tag: Tag) => ({
    label: tag.title,
    value: tag.id,
  }));

  useEffect(() => {
    if (courseData && isSuccess) {
      try {
        const categoryIds = courseData.categories?.map((cat) => cat.id) || [];
        const tagIds = courseData.tags?.map((tag) => tag.id) || [];
        const language = courseData.language;

        const [durationValue, durationUnit] = courseData.duration
          ? courseData.duration.split(' ')
          : [0, 'Day(s)'];

        form.setFieldsValue({
          ...courseData,
          category: categoryIds,
          tag: tagIds,
          duration: Number(durationValue),
          course_language: language,
          durationUnit: durationUnit,
        });
      } catch (error) {
        console.error('Error setting course data:', error);
      }
    } else {
      form.setFieldsValue({
        title: '',
        subtitle: '',
        topic: '',
        duration: 0,
        durationUnit: 'Day(s)',
        course_language: undefined,
        level: undefined,
        category: [],
        tag: [],
      });
    }
  }, [form, courseData, isSuccess]);

  const updateCourseMutation = useMutation({
    mutationFn: (data: Course & { categories: number[] }) =>
      api.courses.updateCourse(data),
    onError: (err) => console.error('Create course error:', err),
  });

  const createCourse = useMutation({
    mutationFn: (data: CreateCourseRequest) => api.courses.createCourse(data),
    onSuccess: (response) => {
      navigate(`${routes.create}/${response.id}`);
    },
    onError: (error) => console.log(error),
  });

  const onSave = async () => {
    try {
      const values = await form.validateFields();

      const updateData: CreateCourseRequest = {
        title: values.title,
        duration: `${values.duration} ${values.durationUnit}`,
        subtitle: values.subtitle,
        language: values.course_language,
        level: values.level,
      };

      const categories = values.category || [];
      const tags = values.tag || [];

      if (params.id) {
        await updateCourseMutation.mutateAsync({
          id: Number(params.id),
          ...updateData,
          categories,
          tags,
        });
      } else {
        const createdCourse = await createCourse.mutateAsync(updateData);
        const courseId = createdCourse.id;

        await updateCourseMutation.mutateAsync({
          id: courseId,
          ...updateData,
          categories,
        });

        navigate(`${routes.create}/${courseId}`);
      }
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };

  const onNext = () => {
    onSave();
    onHandleNext();
  };

  return (
    <Flex vertical className={styles.container}>
      <Title level={4}>Basic Information</Title>
      <Divider orientationMargin={32} />
      <Form form={form}>
        <Flex vertical className={styles.formContainer}>
          <Form.Item
            layout="vertical"
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Course title is required' }]}
          >
            <Input
              size="large"
              showCount
              maxLength={80}
              placeholder="Your course title"
            />
          </Form.Item>
          <Form.Item layout="vertical" label="Subtitle" name="subtitle">
            <Input
              size="large"
              showCount
              maxLength={120}
              placeholder="Your course subtitle"
            />
          </Form.Item>
          <Flex justify="space-between" className={styles.category}>
            <Form.Item
              layout="vertical"
              label="Course Categories"
              className={styles.stretch}
              name="category"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={categories}
                mode="multiple"
              />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Course Tags"
              className={styles.stretch}
              name="tag"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={tags}
                mode="multiple"
              />
            </Form.Item>
          </Flex>
          <Flex justify="space-between" className={styles.options}>
            <Form.Item
              layout="vertical"
              label="Course Language"
              className={styles.stretch}
              name="course_language"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={courseLanguages}
              />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Course Level"
              className={styles.stretch}
              name="level"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={courseLevels}
              />
            </Form.Item>
            <Flex>
              <Form.Item
                layout="vertical"
                label="Duration"
                className={styles.stretch}
                name="duration"
              >
                <InputNumber
                  size="large"
                  placeholder="Course Duration"
                  className={styles.inputNumber}
                  min={0}
                />
              </Form.Item>
              <Form.Item name="durationUnit" className={styles.selectDuration}>
                <Select
                  size="large"
                  defaultValue={'Day(s)'}
                  options={duration}
                />
              </Form.Item>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={styles.optionsButtons} justify="end">
          <Flex gap={32}>
            <Button
              size="large"
              variant="filled"
              className={styles.save}
              onClick={onSave}
              htmlType="submit"
            >
              {params.id ? 'Edit' : 'Save'}
            </Button>
            <Button
              size="large"
              htmlType="submit"
              type="primary"
              onClick={onNext}
            >
              {params.id ? 'Edit & Next' : 'Save & Next'}
            </Button>
          </Flex>
        </Flex>
      </Form>
    </Flex>
  );
};
