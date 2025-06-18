import { Layout } from "antd";
import { Flex } from "antd";
import {
  AccountSettings,
  ChangePassword,
  NotificationsSettings,
} from "../../components";
import { SocialProfile } from "../../components/";
import { useStyles } from "./SettingPageStyles";

export const SettingsPage = () => {
  const { styles } = useStyles();
  const { Content } = Layout;
  return (
    <Content>
      <Flex
        vertical={true}
        className="main"
        justify="center"
        align="center"
        gap={24}
      >
        <AccountSettings />
        <SocialProfile />
        <Flex className={styles.bottomPart} gap={24}>
          <NotificationsSettings />
          <ChangePassword />
        </Flex>
      </Flex>
    </Content>
  );
};
