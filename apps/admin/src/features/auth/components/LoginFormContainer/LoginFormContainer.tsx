import { Flex } from 'antd';
import { LoginForm } from '../LoginForm/LoginForm';
import { useStyles } from './LoginFormContainerStyles';
import { LoginOptions } from '../LoginOptions/LoginOptions';

export const LoginFormContainer = () => {
  const { styles } = useStyles();
  return (
    <Flex align="center" justify="center" className={styles.loginFormContainer}>
      <div className={styles.loginFormWrapper}>
        <h1 className={styles.heading}>Sign in to your account</h1>
        <LoginForm />
        <Flex gap={24} justify="center" className={styles.loginOptions}>
          <LoginOptions dividerText="SIGN IN WITH" />
        </Flex>
      </div>
    </Flex>
  );
};
