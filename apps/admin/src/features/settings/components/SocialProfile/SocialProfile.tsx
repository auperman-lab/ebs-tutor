import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useStyles } from './styles';

import {
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  Youtube,
  Linkedin,
} from '@assets';

export const SocialProfile = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical className={styles.mainPart} gap={24}>
      <h1 className={styles.heading}>Social Profile</h1>
      <Form>
        <Flex vertical gap={64}>
          <Form.Item
            layout="vertical"
            label="Personal website"
            className={styles.stretch}
          >
            <Input
              addonBefore={<Globe />}
              placeholder="Personal website or portfolio url..."
              size="large"
            />
          </Form.Item>
          <Row gutter={[16, 64]}>
            <Col className="gutter-row" span={24} xl={8}>
              <Form.Item layout="vertical" label="Facebook">
                <Input
                  addonBefore={<Facebook color="#FF6636" />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} xl={8}>
              <Form.Item layout="vertical" label="Instagram">
                <Input
                  addonBefore={<Instagram />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} xl={8}>
              <Form.Item layout="vertical" label="Linkedin">
                <Input
                  addonBefore={<Linkedin />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} xl={8}>
              <Form.Item layout="vertical" label="Twitter">
                <Input
                  addonBefore={<Twitter />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} xl={8}>
              <Form.Item layout="vertical" label="Whatsapp">
                <Input
                  addonBefore={<Whatsapp />}
                  placeholder="Phone number"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} xl={8}>
              <Form.Item layout="vertical" label="Youtube">
                <Input
                  addonBefore={<Youtube />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" size="large">
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};
