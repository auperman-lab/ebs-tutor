import { useEffect, useState } from 'react';
import { Tabs, TabsProps, Flex, Form } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import merge from 'lodash.merge';
import {
  AdvanceInformation,
  BasicInformation,
  Curriculum,
  PublishCourse,
} from '@features/create-course/components';
import { Clipboard, PlayCircle, MonitorPlay, Stack } from '@assets';
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
        thumbnail: '',
        trailer: '',
        description: '',
        publishInfo: {},
      });
    }
  }, [form]);

  const onHandleSave = () => {
    const values = form.getFieldsValue();
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
  };

  const onHandleNext = () => {
    onHandleSave();
    setActiveKey((prev) => (Number(prev) + 1).toString());
  };

  const onHandleBack = () => {
    setActiveKey((prev) => (Number(prev) - 1).toString());
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <Stack />
          <span>Basic Information</span>
        </Flex>
      ),
      children: <BasicInformation onHandleNext={onHandleNext} />,
    },
    {
      key: '2',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <Clipboard />
          <span>Advance Information</span>
        </Flex>
      ),
      children: <AdvanceInformation />,
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
        <Form.Item name="curriculum">
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
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        items={items}
      />
    </Flex>
  );
};
