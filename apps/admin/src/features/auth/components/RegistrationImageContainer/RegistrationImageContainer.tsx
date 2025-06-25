import { sally_register } from '@assets';
import { Flex } from 'antd';
import { useStyles } from './styles';

export const RegistrationImageContainer = () => {
  const { styles } = useStyles();

  return (
    <Flex justify="center" align="center" className={styles.salyPhoto}>
      <img src={sally_register} />
    </Flex>
  );
};
