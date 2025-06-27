import { Flex } from 'antd';
import { useStyles } from './styles';
import { RegistrationForm, RegistrationImageContainer } from "@features/auth/components";

export const RegistrationPage = () => {
  const { styles } = useStyles();
  return (
    <Flex justify="space-between" className={styles.registerContainer}>
      <RegistrationImageContainer />

      <RegistrationForm />
    </Flex>
  );
};
