import { Col, Form, Input, Row, Select } from 'antd';
import { useStyles } from './styles';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const sort = [
  {
    label: 'Latest',
    value: 'latest',
  },
  {
    label: 'Oldest',
    value: 'oldest',
  },
  {
    label: 'Most Popular',
    value: 'popular',
  },
];

const category = [
  {
    label: 'All Category',
    value: 'all',
  },
  {
    label: 'Design',
    value: 'design',
  },
  {
    label: 'Development',
    value: 'development',
  },
  {
    label: 'Marketing',
    value: 'marketing',
  },
];

const rating = [
  {
    label: '4 Star & Up',
    value: '4',
  },
  {
    label: '3 Star & Up',
    value: '3',
  },
  {
    label: '2 Star & Up',
    value: '2',
  },
  {
    label: '1 Star & Up',
    value: '1',
  },
];

export const MyCoursesFiltration = () => {
  const { styles } = useStyles();

  return (
    <Form className={styles.container}>
      <Row gutter={16}>
        <Col sm={24} lg={9}>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search in your courses..."
            size="large"
          />
        </Col>

        <Col sm={24} lg={5}>
          <Select
            size="large"
            defaultValue="latest"
            className={styles.select}
            options={sort}
          />
        </Col>

        <Col sm={24} lg={5}>
          <Select
            size="large"
            defaultValue="all"
            className={styles.select}
            options={category}
          />
          <Option value="all">All Category</Option>
        </Col>

        <Col className="gutter-row" sm={24} lg={5}>
          <Select
            size="large"
            defaultValue="4"
            className={styles.select}
            options={rating}
          />
        </Col>
      </Row>
    </Form>
  );
};
