import { Skeleton, Flex } from "antd";
import { useStyles } from "./skeletonStyles";

export const StatCardSkeleton = () => {
  const { styles } = useStyles();

  return (
    <Flex justify="space-between" align="center" className={styles.wrapper}>
      <Flex align="center" justify="center" className={styles.iconWrapper}>
        <Skeleton.Avatar active size={40} shape="circle" />
      </Flex>
      <Flex vertical justify="space-between" align="start" className={styles.textWrapper}>
        <Skeleton.Input active size="small" className={styles.title} />
        <Skeleton.Input active size="small" className={styles.subtitle} />
      </Flex>
    </Flex>
  );
};
