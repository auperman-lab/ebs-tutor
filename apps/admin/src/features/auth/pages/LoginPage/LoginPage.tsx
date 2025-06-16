import { Flex } from 'antd';
import { useStyles } from './LoginPageStyles';
import { LoginFormContainer, LoginImageContainer } from '../../components';

export const LoginPage = () => {
  const { styles } = useStyles();
  return (
    <Flex justify="center" className={styles.loginPage}>
      <LoginImageContainer />
      <LoginFormContainer />
    </Flex>
  );
};
