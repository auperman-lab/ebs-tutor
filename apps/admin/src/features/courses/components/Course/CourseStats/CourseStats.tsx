import { Col, Flex, Row, Typography } from 'antd';
import { StatCard } from '@features/dashboard/components';
import { ChartBar, ChatCircle, CreditCard, Gear } from '@assets';
import { useQuery } from '@tanstack/react-query';
import { api } from '@api';
import { FailComponent } from '@features/not-found';
import { useParams } from 'react-router-dom';
import { CourseStatsSkeleton } from './CourseStatsSkeleton';
import { useStyles } from './styles';

const { Text } = Typography;

export const CourseStats = () => {
  const { id } = useParams();
  const { styles } = useStyles();

  if (!id) return <FailComponent message="Invalid course ID" />;

  const {
    data: course,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id),
  });

  if (isLoading) return <CourseStatsSkeleton />;
  if (isError) return <FailComponent message="Failed to load courses" />;
  if (!course) return <Text type="danger">No course data found.</Text>;

  const stats = [
    {
      title: 'Course Level',
      quantity: course.level || 0,
      icon: <ChartBar />,
      color: '#00FF00',
    },
    {
      title: 'Course Language',
      quantity: course.language || 0,
      icon: <Gear />,
      color: '#FF0000',
    },
    {
      title: 'Students Enrolled',
      quantity: course.users_count || 0,
      icon: <CreditCard />,
      color: '#0000FF',
    },
    {
      title: 'Duration',
      quantity: course.duration || 0,
      icon: <ChatCircle />,
      color: '#00FF00',
    },
  ];

  return (
    <Row gutter={[24, 24]} className={styles.fullHeight}>
      <Col span={12}>
        <Flex justify="space-between" vertical className={styles.fullHeight}>
          {stats.map((item, index) => (
            <StatCard
              key={`left-${index}-${item.title}`}
              color={item.color}
              title={item.title}
              quantity={item.quantity}
              icon={item.icon}
            />
          ))}
        </Flex>
      </Col>

      <Col span={12}>
        <Flex justify="space-between" vertical className={styles.fullHeight}>
          {stats.map((item, index) => (
            <StatCard
              key={`right-${index}-${item.title}`}
              color={item.color}
              title={item.title}
              quantity={item.quantity}
              icon={item.icon}
            />
          ))}
        </Flex>
      </Col>
    </Row>
  );
};
