import { Button, Divider, Flex, Input, message, Typography } from 'antd';
import { useStyles } from './styles';
import { ArrowRight } from '@client/assets';
import { useState } from 'react';

const { Text } = Typography;
type SiderProps = {
  price: number;
};

export const Sider = ({ price }: SiderProps) => {
  const { styles } = useStyles();
  const [couponDiscount, setCouponDiscount] = useState(0);
  const taxRate = 15;

  const onSubmitCoupon = (value: string) => {
    if (value.trim().toLowerCase() === 'vaniavernisi') {
      setCouponDiscount(8);
      message.success('Coupon applied!');
    } else {
      setCouponDiscount(0);
      message.error('Not valid coupon');
    }
  };
  return (
    <div className={styles.wrapper}>
      <Flex vertical gap={16}>
        <Flex justify="space-between">
          <Text type="secondary">Subtotal</Text>
          <Text>$61.97 USD</Text>
        </Flex>

        <Flex justify="space-between">
          <Text type="secondary">Coupon Discount</Text>
          <Text>{couponDiscount}%</Text>
        </Flex>

        <Flex justify="space-between">
          <Text type="secondary">Taxes</Text>
          <Text>${price * taxRate * 0.01} USD</Text>
        </Flex>

        <Divider />

        <Flex justify="space-between" align="center">
          <Text>Total:</Text>
          <Text strong className={styles.total}>
            ${price - price * couponDiscount * 0.01} USD
          </Text>
        </Flex>

        <Button type="primary" block size="large">
          <Flex gap={8} align="center">
            <div> Proceed To Checkout</div>
            <ArrowRight />
          </Flex>
        </Button>

        <Divider />

        <Text>Apply coupon code</Text>
        <Input.Search
          placeholder="Coupon code"
          enterButton="Apply"
          size="large"
          className={styles.couponInput}
          onSearch={onSubmitCoupon}
        />
      </Flex>
    </div>
  );
};
