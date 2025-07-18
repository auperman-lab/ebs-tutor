import { Flex } from 'antd';
import { ProductList, Sider } from '@client/features/cart';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { CartItem } from '@client/types';

export const CartPage = () => {
  const { styles } = useStyles();

  const {
    data: cart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => api.cart.get(),
  });

  if (isError) return <div>error of course</div>;
  if (isLoading) return <div> loading...</div>;
  return (
    <Flex
      gap={24}
      vertical
      justify="center"
      align="center"
      className={styles.wrapper}
    >
      <div className={styles.title}>Shopping Cart ()</div>
      <Flex gap={24} className={styles.container}>
        <ProductList
          products={
            cart?.items.map((item: CartItem) => ({
              id: item.id,
              productId: item.product.id,
              title: item.product.name,
              authors: item.product.authors.map(
                (author) => `${author.last_name} ${author.last_name}`
              ),
              price: item.product.price,
              oldPrice: item.product.price_old,
              image: item.product.poster_url,
            })) || []
          }
        />

        <Sider
          price={cart?.total}
          total={cart?.total_with_tax}
          tax={cart?.tax}
        />
      </Flex>
    </Flex>
  );
};
