import { Col, Divider, List, Row, Typography } from 'antd';
import { ProductListItem } from './ProductListItem';
import { useStyles } from './styles';
import { ProductListItemSkeleton } from './ProductListItemSkeleton';

const { Text } = Typography;

type Props = {
  products: ProductItem[];
  loading?: boolean;
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

export const ProductList = ({ products, loading }: Props) => {
  const { styles } = useStyles();

  const skeletonCount = 3;
  const skeletonData = Array.from({ length: skeletonCount }).map((_, i) => ({
    id: `skeleton-${i}`,
  }));

  return (
    <Row className={styles.wrapper} gutter={16}>
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
        <Divider className={styles.dividerNoMargin} />

        {loading ? (
          <List
            itemLayout="horizontal"
            split
            dataSource={products}
            renderItem={(item) => <ProductListItem {...item} />}
          />
        ) : (
          <List
            itemLayout="horizontal"
            split
            dataSource={skeletonData}
            renderItem={() => <ProductListItemSkeleton />}
          />
        )}
      </Col>
    </Row>
  );
};
