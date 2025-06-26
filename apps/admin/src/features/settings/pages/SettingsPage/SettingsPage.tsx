import { Flex } from 'antd';
import {
  AccountSettings,
  ChangePassword,
  NotificationsSettings,
  SocialProfile,
} from '../../components';
import { useStyles } from './styles';

export const SettingsPage = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical={true} justify="center" align="center" gap={24}>
      <AccountSettings />
      <SocialProfile />
      <Flex className={styles.bottomPart} gap={24}>
        <NotificationsSettings />
        <ChangePassword />
      </Flex>
    </Flex>
  );
};
