import { Flex, Typography, Row, Col, Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useURLQuery } from '@clientHooks';
import { api } from '@clientApi';
import { useStyles } from './styles';
import { CourseCard, PaginationComponent } from '@clientComponents';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const CoursesTab = () => {
  const { styles } = useStyles();
  const { getRequestParams } = useURLQuery();

  const params = getRequestParams();

  const { data: courses, isLoading } = useQuery({
    queryKey: ['myCourses', { params }],
    queryFn: () => api.courses.getAllCourses(params),
  });

  const { data: tutors = [] } = useQuery({
    queryKey: ['tutors'],
    queryFn: api.courses.getTutors,
    staleTime: Infinity,
  });

  return (
    <Flex vertical className={styles.container} gap={24}>
      <Title level={4}>Courses</Title>
      <Row gutter={[24, 24]}>
        {isLoading ? (
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        ) : (
          <Col span={24}>
            <Row gutter={[24, 24]}>
              {courses!.data.map((item) => (
                <Col key={item.id} lg={12} xl={6}>
                  <CourseCard
                    image_url={item.image_url}
                    title={item.title}
                    id={item.id}
                    isProfileCard={true}
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
    </Flex>
  );
};
