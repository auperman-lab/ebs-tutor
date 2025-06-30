import { Avatar, Button, Flex, Input, Layout, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { useStyles } from './styles';
import { routes } from '@const';
import { MagnifyingGlass, Bell } from '@assets';

const { Text, Title } = Typography;
const { Header } = Layout;

const pageTitles: Record<string, string> = {
  [routes.main]: 'Dashboard',
  [routes.courses]: 'My courses',
  [routes.settings]: 'Settings',
  [routes.create]: 'Create a new course',
};

const getPageTitle = (pathname: string): string => {
  const segment = pathname.split('/').filter(Boolean);
  return pageTitles[pathname === '/' ? '/' : '/' + segment[0]] || 'Page';
};

console.log(location.pathname);
console.log(getPageTitle(location.pathname));

export const DashboardHeader = () => {
  const location = useLocation();
  const { styles } = useStyles();

  return (
    <Header className={styles.header}>
      <Flex
        justify="space-between"
        align="center"
        className={styles.headerWrapper}
      >
        <Flex vertical>
          <Text type="secondary">Good Morning</Text>
          <Title level={4}>{getPageTitle(location.pathname)}</Title>
        </Flex>
        <Flex gap={16} align="center">
          <Input
            addonBefore={<MagnifyingGlass />}
            size="large"
            placeholder="Search"
          />
          <Button size="large" className={styles.button} icon={<Bell />} />

          <Avatar
            className={styles.avatar}
            src="https://pbs.twimg.com/media/F9xhN65WQAATLoU.jpg"
            size={48}
          />
        </Flex>
      </Flex>
    </Header>
  );
};
