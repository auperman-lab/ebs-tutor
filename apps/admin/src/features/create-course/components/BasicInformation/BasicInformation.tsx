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
import {
  courseCategories,
  courseLanguages,
  courseLevels,
  courseSubCategories,
  duration,
  subtitleLanguages,
} from './data';

const { Title } = Typography;

export const BasicInformation = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();

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
        <Flex vertical gap={64}>
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
          <Flex justify="space-between" gap={24}>
            <Form.Item
              layout="vertical"
              label="Course Category"
              className={styles.stretch}
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
          <Flex justify="space-between" gap={24}>
            <Form.Item
              layout="vertical"
              label="Course Language"
              className={styles.stretch}
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
              className={styles.stretch}
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
