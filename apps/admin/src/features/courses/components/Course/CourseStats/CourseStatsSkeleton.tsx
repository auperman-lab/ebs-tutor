import { Col, Flex, Row } from 'antd';
import { StatCardSkeleton } from '@features/dashboard/components';
import { useStyles } from './skeletonStyles';

export const CourseStatsSkeleton = () => {
  const { styles } = useStyles();

  const Stats = Array.from({ length: 4 });

  return (
    <Row gutter={[24, 24]} className={styles.container}>
      <Col span={12} className={styles.column}>
        <Flex gap={24} vertical className={styles.flexColumn}>
          {Stats.map((_, index) => (
            <StatCardSkeleton key={`left-${index}`} />
          ))}
        </Flex>
      </Col>

      <Col span={12} className={styles.column}>
        <Flex gap={24} vertical className={styles.flexColumn}>
          {Stats.map((_, index) => (
            <StatCardSkeleton key={`right-${index}`} />
          ))}
        </Flex>
      </Col>
    </Row>
  );
};
