import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useStyles } from './SocialProfileStyles';
import {
  Globe,
  SocialFacebook,
  SocialInstagram,
  SocialTwitter,
  SocialWhatsapp,
  SocialYouTube,
  SociallinkedIn,
} from '@assets/dashboard';

export const SocialProfile = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical className={styles.mainPart} gap={24}>
      <h1 className={styles.heading}>Account Settings</h1>
      <Form>
        <Flex vertical gap={24}>
          <Form.Item
            layout="vertical"
            label="Personal website"
            style={{ flex: 1 }}
          >
            <Input
              addonBefore={<img src={Globe} />}
              placeholder="Personal website or portfolio url..."
            />
          </Form.Item>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={8}>
              <Form.Item layout="vertical" label="Facebook" style={{ flex: 1 }}>
                <Input
                  addonBefore={<img src={SocialFacebook} />}
                  placeholder="Username"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                layout="vertical"
                label="Instagram"
                style={{ flex: 1 }}
              >
                <Input
                  addonBefore={<img src={SocialInstagram} />}
                  placeholder="Username"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item layout="vertical" label="Linkedin" style={{ flex: 1 }}>
                <Input
                  addonBefore={<img src={SociallinkedIn} />}
                  placeholder="Username"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item layout="vertical" label="Twitter" style={{ flex: 1 }}>
                <Input
                  addonBefore={<img src={SocialTwitter} />}
                  placeholder="Username"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item layout="vertical" label="Whatsapp" style={{ flex: 1 }}>
                <Input
                  addonBefore={<img src={SocialWhatsapp} />}
                  placeholder="Phone number"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item layout="vertical" label="Youtube" style={{ flex: 1 }}>
                <Input
                  addonBefore={<img src={SocialYouTube} />}
                  placeholder="Username"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button className={styles.saveButton} type="primary">
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};
