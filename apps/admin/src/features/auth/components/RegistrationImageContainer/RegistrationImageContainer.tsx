import saly from '@assets/auth/Saly-1.png';
import { Flex } from 'antd';
import { useStyles } from './RegistrationImageContainerStyles';

export const RegistrationImageContainer = () => {
  const { styles } = useStyles();

  return (
    <Flex justify="center" align="center" className={styles.salyPhoto}>
      <img src={saly} />
    </Flex>
  );
};
