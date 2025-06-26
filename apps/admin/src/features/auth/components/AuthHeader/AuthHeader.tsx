import { Button, Flex, Space } from 'antd';
import { GraduationCap } from '@assets';
import { Header } from 'antd/lib/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from './AuthHeaderStyles';
import { routes } from '@const';

export const AuthHeader = () => {
  const { styles } = useStyles();

  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';
  const handleRedirect = () => {
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
          <Flex gap={8}>
            <GraduationCap />
            <h1 className={styles.headerTitle}>E-tutor</h1>
          </Flex>
        </Button>

        <Space className={styles.createAccountWrapper}>
          <p className={styles.createAccountText}>
            {isLogin ? `Don't have an account?` : `Already have an account?`}
          </p>
          <Button
            className={styles.createAccountButton}
            size="large"
            onClick={handleRedirect}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </Button>
        </Space>
      </Flex>
    </Header>
  );
};
