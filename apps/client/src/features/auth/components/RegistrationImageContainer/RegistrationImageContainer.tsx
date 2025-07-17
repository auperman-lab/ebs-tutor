import { SallyRegistration } from '@client/assets';
import { Flex } from 'antd';
import { useStyles } from './styles';

export const RegistrationImageContainer = () => {
  const { styles } = useStyles();

  return (
    <Flex justify="center" align="center" className={styles.salyPhoto}>
      <SallyRegistration />
    </Flex>
  );
};
