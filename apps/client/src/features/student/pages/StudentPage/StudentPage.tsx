import { useState } from 'react';
import { Button, Flex, Avatar, Typography, Tabs, TabsProps } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { useStyles } from './styles';
import { useAuth } from '@client/hooks';
import { ArrowRight } from '@client/assets';
import {
  DashboardTab,
  CoursesTab,
  TeachersTab,
  SettingsTab,
} from '@client/features/student';
import { getTokenData } from '@client/utils';

const { Title, Text } = Typography;

export const StudentPage = () => {
  const { styles } = useStyles();
  const { user, logout } = useAuth();
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
      children: <TeachersTab />,
    },
    {
      key: '4',
      label: <span className={styles.label}>Settings</span>,
      children: <SettingsTab />,
    },
  ];

  const onToAdmin = () => {
    const tokenData = getTokenData();
    if (user?.roles.includes('admin')) {
      const url = new URL(import.meta.env['VITE_ADMIN_PANEL_URL']);
      url.searchParams.set('token', tokenData.token);
      url.searchParams.set('expires_at', tokenData.exp);

      window.location.href = url.toString();
    }
  };

  const { data } = useQuery({
    queryKey: ['bio'],
    queryFn: api.user.retrieveMyself,
    staleTime: Infinity,
  });

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
            <Text>{data?.bio}</Text>
          </Flex>
        </Flex>
        <Flex vertical gap={24}>
          {user?.roles.includes('admin') ? (
            <Button
              size="large"
              type="primary"
              onClick={() => onToAdmin()}
              className={styles.become}
            >
              Go to admin dashboard
              <ArrowRight />
            </Button>
          ) : (
            <Button size="large" type="primary" className={styles.become}>
              <Flex align="center" gap={8}>
                Become Instructor
                <ArrowRight />
              </Flex>
            </Button>
          )}
          <Button
            size="large"
            type="primary"
            onClick={() => logout()}
            className={styles.logout}
          >
            <Flex align="center" gap={8}>
              Logout
              <ArrowRight />
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <Tabs
        size="large"
        defaultActiveKey="1"
        activeKey={activeKey}
        destroyOnHidden={true}
        onChange={(key) => setActiveKey(key)}
        items={items}
      />
    </Flex>
  );
};
