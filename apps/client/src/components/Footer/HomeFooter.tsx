import { Flex, Row, Col, Button } from 'antd';
import { useStyles } from './styles';

export const MainFooter = () => {
  const { styles } = useStyles();

  return (
    <footer className={styles.footer}>
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
              <Button size="large" className={styles.customButton}>
                Browse all courses
              </Button>
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
    </footer>
  );
};
