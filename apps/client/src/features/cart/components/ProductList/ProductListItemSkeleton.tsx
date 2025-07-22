import { Skeleton, List, Flex, Button } from 'antd';
import { useStyles } from './styles';
import { XCircle } from '@client/assets';

export const ProductListItemSkeleton = () => {
  const { styles } = useStyles();

  return (
    <List.Item className={styles.item}>
      <Button type="link" icon={<XCircle />} className={styles.removeButton} />

      <Skeleton.Avatar
        active
        shape="square"
        size={120}
        className={styles.image}
      />

      <Flex vertical className={styles.content} gap={8}>
        <div className={styles.rating}>
          <Skeleton.Input active size="small" />
        </div>

        <Skeleton.Input active size="default" />
      </Flex>

      <div className={styles.priceContainer}>
        <Skeleton.Input active size="default" />
      </div>
      <div className={styles.priceContainer}>
        <Skeleton.Input active size="default" />
      </div>
    </List.Item>
  );
};
