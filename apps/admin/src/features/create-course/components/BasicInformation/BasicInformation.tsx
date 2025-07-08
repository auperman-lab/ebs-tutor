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
import type { CreateCourseRequest } from '@types';
import { routes } from '@const';
import { api } from '@api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import {
  courseCategories,
  courseLanguages,
  courseLevels,
  courseSubCategories,
  duration,
  subtitleLanguages,
} from './data';
import { useEffect } from 'react';

const { Title } = Typography;

type BasicInformationProps = {
  onHandleNext?: () => void;
};

export const BasicInformation = ({ onHandleNext }: BasicInformationProps) => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();

  const selectAfter = (
    <Select
      size="large"
      defaultValue="Day"
      options={duration}
      className={styles.selectDuration}
    />
  );

  const { data: courseData, isSuccess } = useQuery({
    queryKey: ['course', params.id],
    queryFn: () => api.courses.getCourse(params.id ?? '0'),
    enabled: !!params.id,
  });

  useEffect(() => {
    if (courseData && isSuccess) {
      try {
        form.setFieldsValue(courseData);
      } catch (error) {
        console.error('Error setting data:', error);
      }
    } else {
      form.setFieldsValue({
        title: '',
        subtitle: '',
        category: 'select',
        sub_category: 'select',
        topic: '',
        course_language: 'select',
        subtitle_language: 'select',
        level: 'select',
        duration: 0,
        durationUnit: 'day',
      });
    }
  }, [form]);

  const { mutate } = useMutation({
    mutationFn: (data: CreateCourseRequest) => api.courses.createCourse(data),
    onSuccess: (response) => {
      navigate(`${routes.create}/${response.id}`);
    },
    onError: (error) => console.log(error),
  });

  const onSave = () => {
    const formData = form.getFieldsValue();
    const courseData = {
      title: formData.title,
      duration: `${formData.duration} ${formData.durationUnit}`,
      subtitle: formData.subtitle,
      language: formData.course_language,
      description: formData.description,
      level: formData.level,
    };
    mutate(courseData);
  };

  const onNext = () => {
    onSave();
    onHandleNext;
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
              label="Course Category"
              className={styles.stretch}
              name="category"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={courseCategories}
              />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Course Sub-category"
              className={styles.stretch}
              name="sub_category"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={courseSubCategories}
              />
            </Form.Item>
          </Flex>
          <Form.Item layout="vertical" label="Course Topic" name="topic">
            <Input
              size="large"
              placeholder="What is primarily taught in your course?"
            />
          </Form.Item>
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
              label="Subtitle Language (Optional)"
              className={styles.stretch}
              name="subtitle_language"
            >
              <Select
                size="large"
                placeholder="Select..."
                options={subtitleLanguages}
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
            <Form.Item
              layout="vertical"
              label="Duration"
              className={styles.stretch}
              name="duration"
            >
              <InputNumber
                size="large"
                addonAfter={selectAfter}
                placeholder="Course Duration"
                className={styles.inputNumber}
                min={0}
              />
            </Form.Item>
          </Flex>
        </Flex>
        <Flex className={styles.optionsButtons} gap={32} justify="end">
          <Button
            size="large"
            variant="filled"
            className={styles.save}
            onClick={onSave}
            htmlType="submit"
          >
            Save
          </Button>
          <Button
            size="large"
            htmlType="submit"
            type="primary"
            onClick={onNext}
          >
            Save & Next
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};
