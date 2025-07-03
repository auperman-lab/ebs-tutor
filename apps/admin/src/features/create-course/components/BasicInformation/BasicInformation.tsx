import {
  Divider,
  Flex,
  Typography,
  Form,
  Input,
  Select,
  InputNumber,
} from 'antd';
import { useStyles } from './styles';

const { Title } = Typography;

const courseCategories = [
  { label: 'Technology', value: 'technology' },
  { label: 'Business', value: 'business' },
  { label: 'Arts', value: 'arts' },
  { label: 'Science', value: 'science' },
];

const courseSubCategories = [
  { label: 'Programming', value: 'programming' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Design', value: 'design' },
  { label: 'Biology', value: 'biology' },
];

const courseLanguages = [
  { label: 'English', value: 'english' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'French', value: 'french' },
  { label: 'German', value: 'german' },
];

const subtitleLanguages = [
  { label: 'English', value: 'english' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'None', value: 'none' },
];

const courseLevels = [
  { label: 'Beginner', value: 'beginner' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Advanced', value: 'advanced' },
];

const duration = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];

export const BasicInformation = () => {
  const { styles } = useStyles();

  const selectAfter = (
    <Form.Item name={['basicInfo', 'durationUnit']} noStyle>
      <Select
        size="large"
        defaultValue="day"
        options={duration}
        className={styles.selectDuration}
      />
    </Form.Item>
  );

  return (
    <Flex vertical className={styles.container}>
      <Title level={4}>Basic Information</Title>
      <Divider orientationMargin={32} />
      <Flex vertical className={styles.formContainer}>
        <Form.Item
          layout="vertical"
          label="Title"
          name={['basicInfo', 'title']}
          rules={[{ required: true, message: 'Course title is required' }]}
        >
          <Input
            size="large"
            showCount
            maxLength={80}
            placeholder="Your course title"
          />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Subtitle"
          name={['basicInfo', 'subtitle']}
          rules={[{ required: true, message: 'Course subtitle is required' }]}
        >
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
            name={['basicInfo', 'category']}
            rules={[{ required: true, message: 'Category is required' }]}
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
            name={['basicInfo', 'sub_category']}
            rules={[{ required: true, message: 'Sub-category is required' }]}
          >
            <Select
              size="large"
              placeholder="Select..."
              options={courseSubCategories}
            />
          </Form.Item>
        </Flex>
        <Form.Item
          layout="vertical"
          label="Course Topic"
          name={['basicInfo', 'topic']}
          rules={[{ required: true, message: 'Topic is required' }]}
        >
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
            name={['basicInfo', 'course_language']}
            rules={[{ required: true, message: 'Course language is required' }]}
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
            name={['basicInfo', 'subtitle_language']}
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
            name={['basicInfo', 'level']}
            rules={[{ required: true, message: 'Course level is required' }]}
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
            name={['basicInfo', 'duration']}
            rules={[{ required: true, message: 'Duration is required' }]}
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
    </Flex>
  );
};
