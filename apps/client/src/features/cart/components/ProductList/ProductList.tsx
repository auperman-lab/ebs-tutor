import { Col, Divider, List, Row, Typography } from 'antd';
import { ProductListItem } from './ProductListItem';
import { useStyles } from './styles';

const { Text } = Typography;

const data = [
  {
    id: 1,
    title: 'The Python Mega Course: Build 10 Real World Applications',
    authors: ['Leslie Alexander', 'Guy Hawkins'],
    price: 37.99,
    oldPrice: 49.0,
  },
  {
    id: 2,
    title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
    authors: ['Bessie Cooper'],
    price: 9.99,
  },
  {
    id: 3,
    title: 'Learn Ethical Hacking From Scratch',
    authors: ['Marvin McKinney'],
    price: 13.99,
  },
];

export const ProductList = () => {
  const { styles } = useStyles();

  return (
    <Row
      className={styles.wrapper}
      style={{ backgroundColor: 'white' }}
      gutter={16}
    >
      <Col span={18} className={styles.columnTitle}>
        <Text>COURSE</Text>
      </Col>
      <Col span={3} className={styles.columnTitle}>
        <Text>PRICES</Text>
      </Col>
      <Col span={3} className={styles.columnTitle}>
        <Text>ACTION</Text>
      </Col>
      <Col span={24}>
        <Divider style={{ margin: '0' }} />
        <List
          itemLayout="horizontal"
          dataSource={data}
          split={true}
          renderItem={(item) => <ProductListItem {...item} />}
        />
      </Col>
    </Row>
  );
};
