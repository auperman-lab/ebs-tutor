import { Col, Empty, Flex, Row, Spin, Typography } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useURLQuery } from '@client/hooks';
import { api } from '@client/api/api';
import { useStyles } from './styles';
import { CourseCard, Filters, PaginationComponent } from '@client/components';
import { useState } from 'react';

const { Title } = Typography;

export const CoursesTab = () => {
  const { styles } = useStyles();
  const { getRequestParams, getParams } = useURLQuery();

  const urlParams = getParams();
  const requestParams = getRequestParams();

  const [searchValue, setSearchValue] = useState(urlParams.search || '');

  const { data: myCourseIdsData, isLoading: loadingCourseIds } = useQuery({
    queryKey: ['myCourseIds'],
    queryFn: () => api.courses.getMyCourses(),
  });

  const { data: courses, isLoading: loadingCourses } = useQuery({
    queryKey: ['myCourses', requestParams, myCourseIdsData?.ids],
    queryFn: () =>
      api.courses.getAllCourses({
        ...requestParams,
        'ids[]': myCourseIdsData?.ids || [],
      }),
    enabled: !!myCourseIdsData?.ids?.length,
  });

  const { data: tutors = [] } = useQuery({
    queryKey: ['tutors'],
    queryFn: api.courses.getTutors,
    staleTime: Infinity,
  });

  return (
    <Flex vertical className={styles.container} gap={24}>
      <Title level={4}>Courses ({courses?.total})</Title>

      <Filters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        tutors={tutors}
      />

      {loadingCourseIds || loadingCourses ? (
        <Spin size="large" className={styles.spinner} />
      ) : !courses?.data?.length ? (
        <Empty description="No courses found" />
      ) : (
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Row gutter={[24, 24]}>
              {courses.data.map((item) => (
                <Col key={item.id} lg={12} xl={6}>
                  <CourseCard
                    imageUrl={item.image_url}
                    title={item.title}
                    id={item.id}
                    isProfileCard={true}
                    categories={item.categories}
                    usersCount={item.users_count}
                  />
                </Col>
              ))}
            </Row>

            <Flex justify="center" align="center" className={styles.pagination}>
              <PaginationComponent totalItems={courses.total || 0} />
            </Flex>
          </Col>
        </Row>
      )}
    </Flex>
  );
};
