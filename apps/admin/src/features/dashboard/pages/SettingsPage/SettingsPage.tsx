import { Layout } from 'antd';
import { Flex } from 'antd';
import { AccountSettings } from '../../components';
import { SocialProfile } from '../../components/';

export const SettingsPage = () => {
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
      </Flex>
    </Content>
  );
};
