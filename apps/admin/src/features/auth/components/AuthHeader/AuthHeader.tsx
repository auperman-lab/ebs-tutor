import { Button, Flex, Space, Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap } from '@assets';
import { useStyles } from './AuthHeaderStyles';
import { routes } from '@const';

const { Header } = Layout;


export const AuthHeader = () => {
  const { styles } = useStyles();

  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  const onRedirect = () => {
    navigate(isLogin ? routes.register : routes.login);
  };

  return (
    <Header className={styles.header}>
      <Flex
        gap="middle"
        align="center"
        justify="space-between"
        className={styles.headerComponentsWrapper}
      >
        <Button
          size="large"
          className={styles.headerLogo}
          onClick={() => navigate('/')}
        >
          <GraduationCap />
          <h1 className={styles.headerTitle}>E-tutor</h1>
        </Button>

        <Space className={styles.createAccountWrapper}>
          <p className={styles.createAccountText}>
            {isLogin ? `Don't have an account?` : `Already have an account?`}
          </p>
          <Button
            className={styles.createAccountButton}
            size="large"
            onClick={onRedirect}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </Button>
        </Space>
      </Flex>
    </Header>
  );
};
