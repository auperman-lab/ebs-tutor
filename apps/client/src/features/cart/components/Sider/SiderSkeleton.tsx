import { Button, Divider, Flex, Input, Skeleton, Typography } from 'antd';
import { useStyles } from './styles';
import { ArrowRight } from '@client/assets';

const { Text } = Typography;

export const SiderSkeleton = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <Flex vertical gap={16}>
        <Flex justify="space-between">
          <Text type="secondary">Subtotal</Text>
          <Skeleton.Input active size="small" />
        </Flex>

        <Flex justify="space-between">
          <Text type="secondary">Coupon Discount</Text>
          <Skeleton.Input active size="small" />
        </Flex>

        <Flex justify="space-between">
          <Text type="secondary">Taxes</Text>
          <Skeleton.Input active size="small" />
        </Flex>

        <Divider />

        <Flex justify="space-between" align="center">
          <Text>Total:</Text>
          <Skeleton.Input active size="default" />
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
        />
      </Flex>
    </div>
  );
};
