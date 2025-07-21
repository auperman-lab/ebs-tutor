import { Button, Col, Flex, Grid, Row, Spin, Tooltip } from 'antd';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { LoadingOutlined } from '@ant-design/icons';
import { CourseCard } from '@client/components';
import { GetCoursesRequest, ParamsSortOption } from '@client/types';
import { ArrowRight } from '@client/assets';
import { CustomTooltip } from './CustomTooltip';
import { useNavigate } from 'react-router-dom';
import { routes } from '@client/const';

const { useBreakpoint } = Grid;

export const RecentSubsection = () => {
  const { styles } = useStyles();
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const params: GetCoursesRequest = {
    per_page: 4,
    page: 1,
    order: ParamsSortOption.asc,
    order_by: 'created_at',
  };
  let visibleCount = 4;

  if (screens.xl) {
    visibleCount = 4;
  } else if (screens.lg) {
    visibleCount = 4;
  } else if (screens.md) {
    visibleCount = 3;
  } else if (screens.sm) {
    visibleCount = 2;
  }

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['recentCourses', { params }],
    queryFn: () => api.courses.getAllCourses(params),
  });

  const onClick = () => {
    navigate(routes.courses);
  };

  if (isError) return <div>error of course</div>;

  return (
    <Flex gap={40} vertical align="center" justify="center">
      <div className={styles.title}>Recently added courses</div>
      {isLoading ? (
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      ) : (
        <Row gutter={[24, 24]} className={styles.coursesWrapper}>
          {courses?.data?.slice(0, visibleCount)?.map((item) => (
            <Col key={item.id} sm={12} md={8} lg={6} xl={6}>
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
                    priceOld={item.product?.price_old}
                    categories={item.categories}
                    author={item.author}
                  />
                }
              >
                <div>
                  <CourseCard
                    key={item.id}
                    imageUrl={item.image_url}
                    title={item.title}
                    id={item.id}
                    categories={item.categories}
                    usersCount={item.users_count}
                    price={item.product?.price}
                  />
                </div>
              </Tooltip>
            </Col>
          ))}
        </Row>
      )}
      <Button
        size="large"
        type="primary"
        className={styles.button}
        onClick={onClick}
      >
        <Flex gap={12} align="center" justify="center">
          <div>Browse all courses</div>
          <ArrowRight />
        </Flex>
      </Button>
    </Flex>
  );
};
