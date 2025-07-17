import { Button, Flex, Image, List, Rate, Typography } from 'antd';
import { NoImage, XCircle } from '@client/assets';
import { useStyles } from './styles';

const { Text } = Typography;

type ProductListItemProps = {
  title: string;
  authors: string[];
  price: number;
  oldPrice?: number;
  image?: string;
};

export const ProductListItem = ({
  title,
  authors,
  price,
  oldPrice,
  image,
}: ProductListItemProps) => {
  const { styles } = useStyles();

  return (
    <List.Item
      className={styles.item}
      actions={[
        <Button size="large" type="text" danger key="wishlist">
          Move To Wishlist
        </Button>,
      ]}
    >
      <Button type="link" icon={<XCircle />} className={styles.removeButton} />

      {image ? (
        <Image width={120} height={80} className={styles.image} src={image} />
      ) : (
        <NoImage width={120} height={80} className={styles.image} />
      )}

      <Flex vertical className={styles.content} gap={8}>
        <div className={styles.rating}>
          <Rate disabled allowHalf defaultValue={4.7} className={styles.rate} />
          <span className={styles.reviewCount}>(452 Reviews)</span>
        </div>

        <Text strong className={styles.title}>
          {title}
        </Text>

        <div className={styles.authors}>
          <Text type="secondary">Course by: </Text>
          <Text>{authors.join(' • ')}</Text>
        </div>
      </Flex>

      <div className={styles.priceContainer}>
        <Text className={styles.price}>${price}</Text>
        {oldPrice && (
          <Text delete className={styles.oldPrice}>
            ${oldPrice}
          </Text>
        )}
      </div>
    </List.Item>
  );
};
