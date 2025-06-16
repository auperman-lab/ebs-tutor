import { RegistrationForm, RegistrationImageContainer } from '../../components';
import { Flex } from 'antd';
import { useStyles } from './RegistrationPageStyles';

export const RegistrationPage = () => {
  const { styles } = useStyles();
  return (
    <Flex justify="space-between" className={styles.registerContainer}>
      <RegistrationImageContainer />
      <RegistrationForm />
    </Flex>
  );
};
