import { Flex, Typography } from 'antd';
import { useStyles } from './styles';

const { Text, Title } = Typography;

export const MainFooter = () => {
  const { styles } = useStyles();
  return (
    <footer className={styles.footer}>
      <Flex className={styles.container}>
        <Flex vertical gap={26}>
          <Title level={3}>E-tutor</Title>
          <Text type="secondary">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </Text>
          <div>Buttons</div>
        </Flex>
      </Flex>
    </footer>
  );
};
