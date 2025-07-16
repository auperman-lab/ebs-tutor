import { Flex } from 'antd';
import { useStyles } from './styles';
import { SallyLogin } from '@assets';

export const LoginImageContainer = () => {
  const { styles } = useStyles();
  return (
    <Flex
      vertical={true}
      justify="flex-end"
      align="center"
      className={styles.imageContainer}
    >
      <SallyLogin />
    </Flex>
  );
};
