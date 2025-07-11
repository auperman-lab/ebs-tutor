import { useState } from 'react';
import { Tabs, TabsProps, Flex, Form } from 'antd';
import {
  AdvanceInformation,
  BasicInformation,
  Curriculum,
  PublishCourse,
} from '@features/create-course/components';
import { Clipboard, PlayCircle, MonitorPlay, Stack } from '@assets';

import { useStyles } from './styles';

export const CreateCoursePage = () => {
  const { styles } = useStyles();
  const [activeKey, setActiveKey] = useState('1');

  const onHandleNext = () => {
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
      children: (
        <BasicInformation
          onHandleNext={onHandleNext}
          onHandleBack={onHandleBack}
          activeKey={activeKey}
        />
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
        <AdvanceInformation
          onHandleNext={onHandleNext}
          onHandleBack={onHandleBack}
          activeKey={activeKey}
        />
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
        <Curriculum
          onHandleNext={onHandleNext}
          onHandleBack={onHandleBack}
          activeKey={activeKey}
        />
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
