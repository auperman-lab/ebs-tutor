import { Flex } from 'antd';
import { ProductList, Sider } from '@client/features/cart';
import { useStyles } from './styles';

export const CartPage = () => {
  const { styles } = useStyles();

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
        <ProductList />
        <Sider price={75} />
      </Flex>
    </Flex>
  );
};
