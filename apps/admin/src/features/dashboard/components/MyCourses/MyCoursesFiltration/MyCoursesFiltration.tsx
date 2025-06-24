import { Col, Flex, Form, Input, Row, Select } from 'antd';
import { useStyles } from './styles';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

export const MyCoursesFiltration = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical className={styles.container}>
      <Form>
        <Row gutter={16}>
          <Col className="gutter-row" sm={24} lg={9}>
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search in your courses..."
              size="large"
            />
          </Col>

          <Col className="gutter-row" sm={24} lg={5}>
            <Select
              size="large"
              defaultValue="latest"
              className={styles.select}
            >
              <Option value="latest">Latest</Option>
              <Option value="oldest">Oldest</Option>
              <Option value="popular">Most Popular</Option>
            </Select>
          </Col>

          <Col className="gutter-row" sm={24} lg={5}>
            <Select size="large" defaultValue="all" className={styles.select}>
              <Option value="all">All Category</Option>
              <Option value="design">Design</Option>
              <Option value="development">Development</Option>
              <Option value="marketing">Marketing</Option>
            </Select>
          </Col>

          <Col className="gutter-row" sm={24} lg={5}>
            <Select size="large" defaultValue="4" className={styles.select}>
              <Option value="4">4 Star & Up</Option>
              <Option value="3">3 Star & Up</Option>
              <Option value="2">2 Star & Up</Option>
              <Option value="1">1 Star & Up</Option>
            </Select>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};
