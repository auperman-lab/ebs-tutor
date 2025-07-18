import { Button, Flex, Image, List, message, Rate, Typography } from 'antd';
import { NoImage, XCircle } from '@client/assets';
import { useStyles } from './styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@client/api/api';

const { Text } = Typography;

type Props = {
  id: number;
  productId: number;
  title: string;
  authors: string[];
  price: number;
  oldPrice?: number;
  image?: string;
};

export const ProductListItem = ({
  productId,
  title,
  authors,
  price,
  oldPrice,
  image,
}: Props) => {
  const { styles } = useStyles();
  const queryClient = useQueryClient();

  const { mutate: removeFromCartMutation } = useMutation({
    mutationFn: () => api.cart.remove(productId || 0),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      message.success('Removed from cart');
    },
    onError: () => {
      message.error('Failed to remove from cart');
    },
  });

  const onRemoveItem = () => {
    removeFromCartMutation();
  };
  return (
    <List.Item
      className={styles.item}
      actions={[
        <Button size="large" type="text" className={styles.wishlist}>
          Move To Wishlist
        </Button>,
      ]}
    >
      <Button
        type="link"
        icon={<XCircle />}
        className={styles.removeButton}
        onClick={onRemoveItem}
      />

      {image ? (
        <Image
          width={120}
          height={80}
          preview={false}
          className={styles.image}
          src={image}
        />
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
