import { Flex } from 'antd';
import { ProductList, Sider } from '@client/features/cart';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { CartItem, GetCartEndpointResponse } from '@client/types';

export const CartPage = () => {
  const { styles } = useStyles();

  const {
    data: cart,
    isLoading: isLoadingCart,
    isError: isErrorCart,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => api.cart.get(),
  });

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useQuery({
    queryKey: ['cart-products'],
    queryFn: () => api.cart.get(),
    select: (data: GetCartEndpointResponse) => {
      return data.items.map((item: CartItem) => ({
        id: item.id,
        productId: item.product.id,
        title: item.product.name,
        authors: item.product.authors.map(
          (author) => `${author.last_name} ${author.first_name}`
        ),
        price: item.product.price,
        oldPrice: item.product.price_old,
        image: item.product.poster_url,
      }));
    },
  });

  if (isErrorCart || isErrorProducts) return <div>error of course</div>;
  return (
    <Flex
      gap={24}
      vertical
      justify="center"
      align="center"
      className={styles.wrapper}
    >
      <div className={styles.title}>Shopping Cart ({products?.length})</div>
      <Flex gap={24} className={styles.container}>
        <ProductList products={products || []} loading={isLoadingProducts} />

        <Sider
          price={cart?.total}
          total={cart?.total_with_tax}
          tax={cart?.tax}
          isLoading={isLoadingCart}
        />
      </Flex>
    </Flex>
  );
};
