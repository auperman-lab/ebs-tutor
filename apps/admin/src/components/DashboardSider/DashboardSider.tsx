import { Layout, Menu, Flex, Divider, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  ChartBar,
  PlusCircle,
  Stack,
  CreditCard,
  ChatCircle,
  Gear,
  GraduationCap,
  SignOut,
} from '@assets';
import { useStyles } from './styles';
import { routes } from '@const';
import { useAuth } from '@hooks';

const { Sider } = Layout;

const menuItems = [
  {
    key: routes.main,
    icon: <ChartBar />,
    label: <Link to={routes.main}>Dashboard</Link>,
  },
  {
    key: routes.create,
    icon: <PlusCircle />,
    label: <Link to={routes.create}>Create New Course</Link>,
  },
  {
    key: routes.courses,
    icon: <Stack />,
    label: <Link to={routes.courses}>My Courses</Link>,
  },
  {
    key: '/earnings',
    icon: <CreditCard />,
    label: <Link to={routes.main}>Earnings</Link>,
  },
  {
    key: '/message',
    icon: <ChatCircle />,
    label: <Link to={routes.main}>Message</Link>,
  },
  {
    key: routes.settings,
    icon: <Gear />,
    label: <Link to={routes.settings}>Settings</Link>,
  },
];

export const DashboardSider = () => {
  const { styles } = useStyles();
  const { logout } = useAuth();
  const location = useLocation();

  const selectedKey = menuItems.find((item) => {
    if (item.key === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(item.key);
  })?.key;

  return (
    <Sider width="280px" className={styles.sidebar} breakpoint="lg">
      <Flex vertical justify="space-between" className={styles.flexContainer}>
        <div>
          <Link to={routes.main}>
            <Flex gap={6} align="center" className={styles.logoContainer}>
              <GraduationCap width={30} height={30} />
              <h1 className={styles.logo}>E-tutor</h1>
            </Flex>
          </Link>
          <Divider className={styles.divider} />
          <Menu
            mode="inline"
            items={menuItems}
            theme="dark"
            selectedKeys={selectedKey ? [selectedKey] : []}
          />
        </div>
        <Button className={styles.logOut} size="large" onClick={logout}>
          <Flex align="center" gap={12}>
            <SignOut />
            <p>Sign-Out</p>
          </Flex>
        </Button>
      </Flex>
    </Sider>
  );
};
