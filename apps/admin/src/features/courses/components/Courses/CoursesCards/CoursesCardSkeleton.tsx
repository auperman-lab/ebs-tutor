import { Card, Col, Divider, Row, Skeleton, Space } from 'antd';
import { useStyles } from './skeletonStyles';

type SkeletonProps = {
  quantity: number;
};
export const CoursesCardSkeleton = ({ quantity }: SkeletonProps) => {
  const { styles } = useStyles();

  return (
    <Row gutter={[24, 24]} className={styles.width}>
      {Array.from({ length: quantity }).map((_, index) => (
        <Col key={index} md={12} lg={8} xl={6}>
          <Card
            key={index}
            hoverable
            className={styles.wrapper}
            cover={<div className={styles.imageSkeleton} />}
          >
            <Space
              direction="vertical"
              size={12}
              className={styles.spaceVertical}
            >
              <Space size={8} className={styles.spaceTags}>
                <Skeleton.Button
                  active
                  size="small"
                  className={styles.skeletonButtonLarge}
                />
                <Skeleton.Button
                  active
                  size="small"
                  className={styles.skeletonButtonMedium}
                />
                <Skeleton.Button
                  active
                  size="small"
                  className={styles.skeletonButtonWide}
                />
              </Space>

              <Skeleton.Input
                active
                size="default"
                className={styles.skeletonInputDefault}
              />
              <Divider className={styles.dividerNoMargin} />
              <Space className={styles.spaceBetweenButtons}>
                <Skeleton.Button
                  active
                  size="small"
                  className={styles.skeletonButtonSmall}
                />
                <Skeleton.Button
                  active
                  size="small"
                  className={styles.skeletonButtonSmall}
                />
              </Space>
              <Divider className={styles.dividerNoMargin} />
              <Space className={styles.spaceBetweenInputs}>
                <Skeleton.Input
                  active
                  size="small"
                  className={styles.skeletonInputSmall}
                />
                <Skeleton.Avatar active size={24} shape="circle" />
              </Space>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
