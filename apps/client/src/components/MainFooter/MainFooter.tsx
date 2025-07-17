import { Flex, Row, Col, Button } from 'antd';
import { useStyles } from './styles';
import {
  GraduationCap,
  Apple,
  GooglePlay,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  YouTube,
} from '@clientAssets';
import { Link, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { routes } from '@clientConst';

export const MainFooter = () => {
  const { styles } = useStyles();
  const location = useLocation();

  return (
    <footer className={styles.footer}>
      {location.pathname === routes.main ? (
        <div className={styles.borderBottom}>
          <Flex className={styles.container} gap={200}>
            <Flex vertical gap={32}>
              <p className={styles.startLearning}>
                Start learning with 67.1k students around the world.
              </p>
              <Flex gap={16}>
                <Button size="large" type="primary">
                  Join the Family
                </Button>
                <Button size="large">Browse all courses</Button>
              </Flex>
            </Flex>
            <Row align="middle">
              <Col span={8}>
                <Flex vertical gap={12}>
                  <p className={styles.startLearning}>6.3k</p>
                  <p>Online courses</p>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex vertical gap={12}>
                  <p className={styles.startLearning}>26k</p>
                  <p>Certified Instructor</p>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex vertical gap={12}>
                  <p className={styles.startLearning}>99.9%</p>
                  <p>Sucess Rate</p>
                </Flex>
              </Col>
            </Row>
          </Flex>
        </div>
      ) : null}
      <div className={styles.borderBottom}>
        <Flex className={styles.container} gap={100}>
          <Flex vertical gap={26} className={styles.buttonsSegment}>
            <Flex gap={8}>
              <GraduationCap /> <h1 className={styles.logo}>E-tutor </h1>
            </Flex>
            <p>
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <Flex gap={12}>
              <Button icon={<Facebook />} size="large" type="primary"></Button>
              <Button
                icon={<Instagram color="white" />}
                size="large"
                type="primary"
              ></Button>
              <Button icon={<Linkedin />} size="large" type="primary"></Button>
              <Button icon={<Twitter />} size="large" type="primary"></Button>
              <Button icon={<YouTube />} size="large" type="primary"></Button>
            </Flex>
          </Flex>
          <Row justify="space-evenly" className={styles.row}>
            <Col span={4}>
              <Flex vertical gap={32}>
                <p className={styles.headings}>Top 4 Category</p>
                <Flex vertical gap={21}>
                  <p>Development</p>
                  <p>Finance & Accounting</p>
                  <p>Design</p>
                  <p>Business</p>
                </Flex>
              </Flex>
            </Col>
            <Col span={4}>
              <Flex vertical gap={32}>
                <p className={styles.headings}>Quick Links</p>
                <Flex vertical gap={16}>
                  <Link to="/" className={styles.link}>
                    <Flex align="center">About</Flex>
                  </Link>
                  <Link to="/" className={styles.link}>
                    Become Instructor
                  </Link>
                  <Link to="/" className={styles.link}>
                    Contact
                  </Link>
                  <Link to="/" className={styles.link}>
                    Career
                  </Link>
                </Flex>
              </Flex>
            </Col>
            <Col span={4}>
              <Flex vertical gap={32}>
                <p className={styles.headings}>Support</p>
                <Flex vertical gap={21}>
                  <p>Help Center</p>
                  <p>FAQs</p>
                  <p>Terms & Condition</p>
                  <p>Privacy Policy</p>
                </Flex>
              </Flex>
            </Col>
            <Col span={4}>
              <Flex vertical gap={32}>
                <p className={styles.headings}>Downlaod our app</p>
                <Flex vertical gap={21}>
                  <Button size="large" type="primary">
                    <Flex align="center" gap={12}>
                      <Apple width={24} height={24} color="white" />
                      <Flex vertical align="start">
                        <p className={styles.now}>Download now</p>
                        <p>App Store</p>
                      </Flex>
                    </Flex>
                  </Button>
                  <Button size="large" type="primary">
                    <Flex align="center" gap={12}>
                      <GooglePlay width={24} height={24} color="white" />
                      <Flex vertical align="start">
                        <p className={styles.now}>Download now</p>
                        <p>Play Store</p>
                      </Flex>
                    </Flex>
                  </Button>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </div>
      <Flex align="center" justify="center" gap={8} className={styles.policy}>
        <p> © {dayjs().year()} - Eduguard. Designed by </p>
        <Link to="https://ant.design" target="_blank">
          <p className={styles.author}>Templatecookie.</p>
        </Link>{' '}
        <p>All rights reserved</p>
      </Flex>
    </footer>
  );
};
