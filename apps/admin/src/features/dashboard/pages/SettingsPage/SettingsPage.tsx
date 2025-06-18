import { Col, Layout, Row } from 'antd';
import { Flex } from 'antd';
import { AccountSettings, NotificationsSettings } from '../../components';
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
        <Row gutter={[0, 24]}>
          <Col className="gutter-row" span={12}>
            <NotificationsSettings />
          </Col>
          <Col className="gutter-row" span={12}>
            erfgthjkl
          </Col>
        </Row>
      </Flex>
    </Content>
  );
};
