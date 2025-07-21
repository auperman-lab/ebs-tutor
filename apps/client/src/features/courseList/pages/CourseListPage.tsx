import { Col, Flex, Row, Spin } from 'antd';
import { Filter, ListHeader } from '@client/features/courseList';
import { api } from '@client/api/api';
import { useQuery } from '@tanstack/react-query';
import { LoadingOutlined } from '@ant-design/icons';
import { useStyles } from './styles';
import { CourseCard, PaginationComponent } from '@client/components';
import { useURLQuery } from '@client/hooks';

export const CourseListPage = () => {
  const { styles } = useStyles();
  const { getRequestParams } = useURLQuery();

  const params = getRequestParams();

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
    <Row gutter={[24, 24]} className={styles.wrapper}>
      <Col span={24}>
        <ListHeader totalItems={courses?.total || 0} />
      </Col>

      <Col span={6}>
        <Filter />
      </Col>

      {isLoading ? (
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      ) : (
        <Col span={18}>
          <Row gutter={[24, 24]}>
            {courses!.data.map((item) => (
              <Col span={6}>
                <CourseCard
                  key={item.id}
                  imageUrl={item.image_url}
                  title={item.title}
                  id={item.id}
                  categories={item.categories}
                  usersCount={item.users_count}
                  price={item.product?.price}
                />
              </Col>
            ))}
          </Row>

          <Flex justify="center" align="center" className={styles.pagination}>
            <PaginationComponent totalItems={courses?.total || 12} />
          </Flex>
        </Col>
      )}
    </Row>
  );
};
