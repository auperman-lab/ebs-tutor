import { Layout, Menu, Flex, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
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
    key: 1,
    icon: <ChartBar />,
    label: <Link to={routes.main}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <PlusCircle />,
    label: <Link to={routes.create}>Create New Course</Link>,
  },
  {
    key: 3,
    icon: <Stack />,
    label: <Link to={routes.courses}>My Courses</Link>,
  },
  {
    key: 4,
    icon: <CreditCard />,
    label: <Link to={routes.main}>Earnings</Link>,
  },
  {
    key: 5,
    icon: <ChatCircle />,
    label: <Link to={routes.main}>Message</Link>,
  },
  {
    key: 6,
    icon: <Gear />,
    label: <Link to={routes.settings}>Settings</Link>,
  },
];

export const DashboardSider = () => {
  const { styles } = useStyles();
  const authContext = useAuth();
  const onLogout = () => {
    authContext.logout();
  };
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
          <Menu mode="inline" items={menuItems} theme="dark" />
        </div>
        <Button className={styles.logOut} size="large" onClick={onLogout}>
          <Flex align="center" gap={12}>
            <SignOut />
            <p> Sign-Out</p>
          </Flex>
        </Button>
      </Flex>
    </Sider>
  );
};
