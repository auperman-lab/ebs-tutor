import { Flex, Skeleton } from 'antd';
import { useStyles } from './skeletonStyles';

export const CourseDescriptionSkeleton = () => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.mainPart} vertical gap={24}>
      <Flex vertical gap={10} className={styles.description}>
        <Flex vertical gap={12}>
          <Skeleton.Input active size="default" />
          <Skeleton paragraph={{ rows: 2 }} active />
        </Flex>

        <Flex justify="space-between">
          <Flex gap={12}>
            <Skeleton.Avatar shape="circle" active />
            <Skeleton.Input active size="default" />
          </Flex>
          <Skeleton.Input active size="default" />
        </Flex>
      </Flex>
      <div className={styles.image} />
    </Flex>
  );
};
