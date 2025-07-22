import { Flex, Layout, Typography } from 'antd';
import { useStyles } from './styles';
import dayjs from 'dayjs';

const { Text, Link } = Typography;
const { Footer } = Layout;

export const DashboardFooter = () => {
  const { styles } = useStyles();

  return (
    <Footer className={styles.footer}>
      <Flex justify="space-between">
        <Text type="secondary">
          © {dayjs().year()} - Eduguard. Designed by{' '}
          <Link href="https://ant.design" target="_blank">
            Templatecookie.
          </Link>{' '}
          All rights reserved
        </Text>
        <Flex gap={24} align="center">
          <Text type="secondary">FAQs</Text>
          <Text type="secondary">Privacy Policy</Text>
          <Text type="secondary">Terms & Condition</Text>
        </Flex>
      </Flex>
    </Footer>
  );
};
