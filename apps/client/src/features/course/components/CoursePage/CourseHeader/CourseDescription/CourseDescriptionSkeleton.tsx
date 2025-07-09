import { Flex, Skeleton, Divider,  } from "antd";
import { useStyles } from "./skeletonStyles";

export const CourseDescriptionSkeleton = () => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.mainPart} gap={24}>
      <div className={styles.image} />
      <Flex vertical gap={10} className={styles.description}>
        <Flex vertical gap={12}>
          <Flex gap={16}>
            <Skeleton.Input className={styles.date} active size="small" />
            <Skeleton.Input className={styles.date} active size="small" />
          </Flex>
          <Skeleton.Input className={styles.title} active size="default" />
          <Skeleton paragraph={{ rows: 2 }} active />
        </Flex>

        <Flex justify="space-between">
          <Flex gap={12}>
            <Flex className={styles.avatarGroup}>
              {[...Array(3)].map((_, idx) => (
                <Skeleton.Avatar key={idx} size="small" shape="circle" active />
              ))}
            </Flex>
            <Flex vertical gap={4}>
              <Skeleton.Input className={styles.metaText} active size="small" />
              <Skeleton.Input className={styles.metaText} active size="default" />
            </Flex>
          </Flex>

          <Flex align="center" gap={12}>
            <Skeleton.Input className={styles.rating} active size="small" />
            <Skeleton.Input className={styles.metaText} active size="small" />
          </Flex>
        </Flex>

        <Divider />

        <Flex justify="space-between">
          <Flex gap={32}>
            <Flex vertical gap={4}>
              <Skeleton.Input className={styles.price} active size="default" />
              <Skeleton.Input className={styles.metaText} active size="small" />
            </Flex>
            <Flex vertical gap={4}>
              <Skeleton.Input className={styles.price} active size="default" />
              <Skeleton.Input className={styles.metaText} active size="small" />
            </Flex>
          </Flex>

          <Flex gap={16} align="center">
            <Skeleton.Button className={styles.buttonPrimary} active size="large" />
            <Skeleton.Button className={styles.buttonSecondary} active size="large" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
