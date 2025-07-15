import { useState } from 'react';
import { Button, Flex, Avatar, Typography, Tabs, TabsProps } from 'antd';
import { useStyles } from './styles';
import { useAuth } from '@clientHooks';
import { ArrowRight } from '@clientAssets';
import {
  DashboardTab,
  CoursesTab,
  TeacherTab,
  SettingsTab,
} from '@clientFeatures/student/components';

const { Title, Text } = Typography;

export const StudentPage = () => {
  const { styles } = useStyles();
  const { user } = useAuth();
  const [activeKey, setActiveKey] = useState('1');

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <span className={styles.label}>Dashboard</span>,
      children: <DashboardTab />,
    },
    {
      key: '2',
      label: <span className={styles.label}>Courses</span>,
      children: <CoursesTab />,
    },
    {
      key: '3',
      label: <span className={styles.label}>Teachers</span>,
      children: <TeacherTab />,
    },
    {
      key: '4',
      label: <span className={styles.label}>Settings</span>,
      children: <SettingsTab />,
    },
  ];

  return (
    <Flex vertical className={styles.container}>
      <Flex
        justify="space-between"
        className={styles.profileHeader}
        align="center"
      >
        <Flex gap={24} align="center">
          <Avatar size={110} src={user?.avatar}></Avatar>
          <Flex vertical gap={14}>
            <Title level={4}>{user?.fullName}</Title>
            <Text type="secondary">{user?.email}</Text>
          </Flex>
        </Flex>
        <Button size="large" type="primary" className={styles.become}>
          <Flex align="center" gap={8}>
            Become Instructor
            <ArrowRight />
          </Flex>
        </Button>
      </Flex>
      <Tabs
        size="large"
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        items={items}
      />
    </Flex>
  );
};
