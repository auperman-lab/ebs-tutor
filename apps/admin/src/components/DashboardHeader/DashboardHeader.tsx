import { Avatar, Button, Flex, Input, Layout } from "antd";
import { useStyles } from "./DashboardHeaderStyles";
import { Typography } from "antd";
import { useLocation } from "react-router-dom";
import { routes } from "@const";
import { SearchOutlined } from "@ant-design/icons";
import { Bell } from "@assets/dashboard";

const { Text, Title } = Typography;

const pageTitles: Record<string, string> = {
  [routes.main]: "Dashboard",
  [routes.myCourses]: "My courses",
  [routes.settings]: "Settings",
};

const getPageTitle = (pathname: string): string => {
  return pageTitles[pathname];
};

export const DashboardHeader = () => {
  const location = useLocation();
  const { Header } = Layout;
  const { styles } = useStyles();

  return (
    <Header className={styles.header}>
      <Flex
        justify="space-between"
        align="center"
        className={styles.headerWrapper}
      >
        <Flex vertical>
          <Text type="secondary">Good Morning</Text>
          <Title level={4} style={{ color: "#1D2026" }}>
            {getPageTitle(location.pathname)}
          </Title>
        </Flex>
        <Flex gap={16} align="center">
          <Input
            addonBefore={<SearchOutlined />}
            size="large"
            placeholder="Search"
          />
          <Button size="large" className={styles.button}>
            <img src={Bell} />
          </Button>
          <Avatar
            className={styles.avatar}
            src={"https://pbs.twimg.com/media/F9xhN65WQAATLoU.jpg"}
          />
        </Flex>
      </Flex>
    </Header>
  );
};
