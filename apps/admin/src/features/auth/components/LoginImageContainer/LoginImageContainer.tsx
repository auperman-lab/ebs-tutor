import { Flex } from 'antd';
import { useStyles } from './LoginImageContainerStyles';
import { sally_login } from '@assets';

export const LoginImageContainer = () => {
  const { styles } = useStyles();
  return (
    <Flex
      vertical={true}
      justify="flex-end"
      align="center"
      className={styles.imageContainer}
    >
      <img src={sally_login} alt="login" />
    </Flex>
  );
};
