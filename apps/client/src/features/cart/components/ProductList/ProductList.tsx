import { Col, Divider, List, Row, Typography } from 'antd';
import { ProductListItem } from './ProductListItem';
import { useStyles } from './styles';

const { Text } = Typography;

type Props = {
  products: ProductItem[];
};

type ProductItem = {
  id: number;
  productId: number;
  title: string;
  authors: string[];
  price: number;
  oldPrice?: number;
  image?: string;
};

export const ProductList = ({ products }: Props) => {
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
          dataSource={products}
          split={true}
          renderItem={(item) => <ProductListItem {...item} />}
        />
      </Col>
    </Row>
  );
};
