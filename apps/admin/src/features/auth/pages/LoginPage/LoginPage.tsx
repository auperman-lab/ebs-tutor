import { Flex } from 'antd';
import { useStyles } from './styles';
import {
  LoginFormContainer,
  LoginImageContainer,
} from '@features/auth/components';

export const LoginPage = () => {
  const { styles } = useStyles();
  return (
    <Flex justify="center" className={styles.loginPage}>
      <LoginImageContainer />
      <LoginFormContainer />
    </Flex>
  );
};
