import { Button, Col, Flex, Row, Spin, Tooltip } from 'antd';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@clientApi';
import { CourseCard } from '@clientComponents';
import { GetCoursesRequest } from '@clientTypes';
import { ArrowRight } from '@clientAssets';
import { CustomTooltip } from './CustomTooltip';

export const RecentSubsection = () => {
  const { styles } = useStyles();

  const params: GetCoursesRequest = {
    per_page: 4,
    page: 1,
    order: 'ASC',
    order_by: 'created_at',
  };

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['myCourses', { params }],
    queryFn: () => api.courses.getAllCourses(params),
  });

  if (isError) return <div>error of course</div>;

  return (
    <Flex gap={40} vertical align="center" justify="center">
      <div className={styles.title}>Recently added courses</div>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[24, 24]} className={styles.coursesWrapper}>
          {courses!.data.map((item) => (
            <Col key={item.id} lg={12} xl={6}>
              <Tooltip
                placement="right"
                styles={{
                  body: {
                    backgroundColor: 'white',
                    width: 400,
                    padding: 16,
                  },
                }}
                title={
                  <CustomTooltip
                    title={item.title}
                    usersCount={item.users_count}
                    duration={item.duration}
                    level={item.level}
                    price={item.product?.price}
                    price_old={item.product?.price_old}
                    categories={item.categories}
                    author={item.author}
                  />
                }
              >
                <div>
                  <CourseCard
                    key={item.id}
                    image_url={item.image_url}
                    title={item.title}
                    id={item.id}
                    categories={item.categories}
                    users_count={item.users_count}
                    price={item.product?.price}
                  />
                </div>
              </Tooltip>
            </Col>
          ))}
        </Row>
      )}
      <Button size="large" type="primary" className={styles.button}>
        <Flex gap={12} align="center" justify="center">
          <div>Browse all courses</div>
          <ArrowRight />
        </Flex>
      </Button>
    </Flex>
  );
};
