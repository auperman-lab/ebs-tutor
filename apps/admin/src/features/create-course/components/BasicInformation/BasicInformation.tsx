import { useEffect } from 'react';
import {
  Divider,
  Flex,
  Typography,
  Form,
  Input,
  Select,
  InputNumber,
} from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import { useStyles } from './styles';

const { Title } = Typography;

const courseCategories = [
  {
    label: 'Technology',
    value: 'technology',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Arts',
    value: 'arts',
  },
  {
    label: 'Science',
    value: 'science',
  },
];

const courseSubCategories = [
  {
    label: 'Programming',
    value: 'programming',
  },
  {
    label: 'Marketing',
    value: 'marketing',
  },
  {
    label: 'Design',
    value: 'design',
  },
  {
    label: 'Biology',
    value: 'biology',
  },
];

const courseLanguages = [
  {
    label: 'English',
    value: 'english',
  },
  {
    label: 'Spanish',
    value: 'spanish',
  },
  {
    label: 'French',
    value: 'french',
  },
  {
    label: 'German',
    value: 'german',
  },
];

const subtitleLanguages = [
  {
    label: 'English',
    value: 'english',
  },
  {
    label: 'Spanish',
    value: 'spanish',
  },
  {
    label: 'None',
    value: 'none',
  },
];

const courseLevels = [
  {
    label: 'Beginner',
    value: 'beginner',
  },
  {
    label: 'Intermediate',
    value: 'intermediate',
  },
  {
    label: 'Advanced',
    value: 'advanced',
  },
];

const duration = [
  {
    label: 'Day',
    value: 'day',
  },
  {
    label: 'Week',
    value: 'week',
  },
  {
    label: 'Month',
    value: 'month',
  },
];

export const BasicInformation = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  useEffect(() => {
    const cached = queryClient.getQueryData(['course', 'basic-info']);
    if (cached) {
      form.setFieldsValue(cached);
    }
  }, []);

  const selectAfter = (
    <Select
      size="large"
      defaultValue="Day"
      options={duration}
      className={styles.selectDuration}
    />
  );
  return (
    <Flex vertical className={styles.container}>
      <Title level={4}>Basic Information</Title>
      <Divider orientationMargin={32} />
      <Form form={form}>
        <Flex vertical className={styles.formContainer}>
          <Form.Item layout="vertical" label="Tittle">
            <Input
              size="large"
              showCount
              maxLength={80}
              placeholder="You course tittle"
            />
          </Form.Item>
          <Form.Item layout="vertical" label="Subtittle">
            <Input
              size="large"
              showCount
              maxLength={120}
              placeholder="You course subtittle"
            />
          </Form.Item>
          <Flex justify="space-between" className={styles.category}>
            <Form.Item
              layout="vertical"
              label="Course Category"
              style={{ width: '100%', flex: 1 }}
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
              style={{ width: '100%', flex: 1 }}
            >
              <Select
                size="large"
                placeholder="Select..."
                options={courseSubCategories}
              />
            </Form.Item>
          </Flex>
          <Form.Item layout="vertical" label="Course Topic">
            <Input
              size="large"
              placeholder="What is primarily taught in your course?"
            />
          </Form.Item>
          <Flex justify="space-between" className={styles.options}>
            <Form.Item
              layout="vertical"
              label="Course Language"
              style={{ width: '100%', flex: 1 }}
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
              style={{ width: '100%', flex: 1 }}
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
              style={{ width: '100%', flex: 1 }}
            >
              <Select
                size="large"
                placeholder="Select..."
                options={courseLevels}
              />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Durations"
              style={{ width: '100%', flex: 1 }}
            >
              <InputNumber
                size="large"
                addonAfter={selectAfter}
                placeholder="Course Duration"
                className={styles.inputNumber}
              />
            </Form.Item>
          </Flex>
        </Flex>
      </Form>
    </Flex>
  );
};
