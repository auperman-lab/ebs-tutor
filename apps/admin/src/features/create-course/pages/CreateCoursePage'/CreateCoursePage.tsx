import { useEffect, useState } from 'react';
import { Tabs, TabsProps, Flex, Form } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import merge from 'lodash.merge';
import {
  BasicInformation,
  AdvanceInformation,
  Curriculum,
  PublishCourse,
  NavigationButtons,
} from '@createcourse';
import { Clipboard, PlayCircle, MonitorPlay } from '@assets';
import { Section } from '@features/create-course/types';
import { useStyles } from './styles';

const defaultSection: Section[] = [
  {
    id: uuidv4(),
    title: '',
    lectures: [
      {
        id: uuidv4(),
        title: '',
        active: false,
        can_skip: false,
        description: '',
      },
    ],
  },
];

export const CreateCoursePage = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const [activeKey, setActiveKey] = useState('1');

  useEffect(() => {
    const savedData = localStorage.getItem('courseFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        form.setFieldsValue(parsedData);
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    } else {
      form.setFieldsValue({
        promises: [{}],
        target: [{}],
        requirements: [{}],
        curriculum: defaultSection,
        basicInfo: {
          title: '',
          subtitle: '',
          category: '',
          sub_category: '',
          topic: '',
          course_language: '',
          subtitle_language: '',
          level: '',
          duration: undefined,
          durationUnit: 'day',
        },
        advanceInfo: {
          thumbnail: '',
          trailer: '',
          description: '',
          promises: [{}],
          target: [{}],
          requirements: [{}],
        },
        publishInfo: {},
      });
    }
  }, [form]);

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const existingData = localStorage.getItem('courseFormData');
        let mergedData = {};

        if (existingData) {
          try {
            mergedData = merge({}, JSON.parse(existingData), values);
          } catch (error) {
            console.error('Error parsing localStorage data:', error);
            mergedData = values;
          }
        } else {
          mergedData = values;
        }

        localStorage.setItem('courseFormData', JSON.stringify(mergedData));
      })
      .catch((error) => {
        console.error('Validation failed:', error);
      });
  };

  const onHandleNext = () => {
    form
      .validateFields()
      .then((values) => {
        const existingData = localStorage.getItem('courseFormData');
        let mergedData = {};

        if (existingData) {
          try {
            mergedData = merge({}, JSON.parse(existingData), values);
          } catch (error) {
            console.error('Error parsing localStorage data:', error);
            mergedData = values;
          }
        } else {
          mergedData = values;
        }

        localStorage.setItem('courseFormData', JSON.stringify(mergedData));
        setActiveKey((prev) => (Number(prev) + 1).toString());
      })
      .catch((error) => {
        console.error('Validation failed:', error);
      });
  };

  const onHandleBack = () => {
    setActiveKey((prev) => (Number(prev) - 1).toString());
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <Clipboard />
          <span>Basic Information</span>
        </Flex>
      ),
      children: (
        <Form.Item name="basicInfo">
          <BasicInformation />
        </Form.Item>
      ),
    },
    {
      key: '2',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <Clipboard />
          <span>Advance Information</span>
        </Flex>
      ),
      children: (
        <Form.Item name="advanceInfo">
          <AdvanceInformation />
        </Form.Item>
      ),
    },
    {
      key: '3',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <MonitorPlay />
          <span>Curriculum</span>
        </Flex>
      ),
      children: (
        <Form.Item
          name="curriculum"
          rules={[{ required: true, message: 'Curriculum is required' }]}
        >
          <Curriculum />
        </Form.Item>
      ),
    },
    {
      key: '4',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <PlayCircle />
          <span>Publish Course</span>
        </Flex>
      ),
      children: (
        <Form.Item name="publishInfo">
          <PublishCourse />
        </Form.Item>
      ),
    },
  ];

  return (
    <Flex vertical className={styles.tabs} gap={24}>
      <Form form={form}>
        <Tabs
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          items={items}
        />
        <NavigationButtons
          activeKey={activeKey}
          onNext={onHandleNext}
          onBack={onHandleBack}
          onSave={handleSave}
        />
      </Form>
    </Flex>
  );
};
