import { Flex, Layout } from "antd";
import { Typography } from "antd";
import { useStyles } from "./DashboardFooterStyles";

const { Text, Link } = Typography;

export const DashboardFooter = () => {
  const { Footer } = Layout;
  const { styles } = useStyles();

  return (
    <Footer className={styles.footer}>
      <Flex justify="space-between">
        <Text type="secondary">
          © 2021 - Eduguard. Designed by{" "}
          <Link href="https://ant.design" target="_blank">
            Templatecookie.
          </Link>{" "}
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
