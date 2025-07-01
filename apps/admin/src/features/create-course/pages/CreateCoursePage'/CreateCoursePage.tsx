import { Tabs, TabsProps, Flex } from 'antd';
import {
  BasicInformation,
  AdvanceInformation,
  Curriculum,
  PublishCourse,
  NavigationButtons,
} from '@createcourse';
import { useState } from 'react';
import { useStyles } from './styles';
import { Clipboard, PlayCircle, MonitorPlay } from '@assets';

export const CreateCoursePage = () => {
  const { styles } = useStyles();
  const [activeKey, setActiveKey] = useState('2');

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <Clipboard />
          <span>Basic Information</span>
        </Flex>
      ),
      children: <BasicInformation />,
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
      children: <Curriculum />,
    },
    {
      key: '4',
      label: (
        <Flex align="center" gap={8} className={styles.label}>
          <PlayCircle />
          <span>Publish Course</span>
        </Flex>
      ),
      children: <PublishCourse />,
    },
  ];

  const handleNext = () => {
    setActiveKey((prev) => (Number(prev) + 1).toString());
  };

  const handleBack = () => {
    setActiveKey((prev) => (Number(prev) - 1).toString());
  };

  return (
    <Flex vertical className={styles.tabs} gap={24}>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        items={items}
      />
      <NavigationButtons
        activeKey={activeKey}
        onNext={handleNext}
        onBack={handleBack}
      />
    </Flex>
  );
};
