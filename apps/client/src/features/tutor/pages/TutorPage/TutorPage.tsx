import { Col, Flex, Row, Spin } from 'antd';
import { TutorPageHeader, TutorPageSider } from '@client/features/tutor';
import { useURLQuery } from '@client/hooks';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { CourseCard } from '@client/components';
import { useStyles } from './styles';

export const TutorPage = () => {
  const { id } = useParams();
  const { getRequestParams } = useURLQuery();
  const { styles } = useStyles();
  const params = getRequestParams();

  if (!id) return <div>No id provided</div>;

  params['authors[]'] = [Number(id)];

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['myCourses', { params }],
    queryFn: () => api.courses.getAllCourses(params),
  });

  const { data: tutor } = useQuery({
    queryKey: ['tutors'],
    queryFn: () => api.courses.getTutor(id),
  });

  if (isError) return <div>error of course</div>;

  return (
    <Row gutter={[24, 24]} className={styles.wrapper}>
      <Col span={24}>
        <TutorPageHeader
          name={`${tutor?.first_name} ${tutor?.last_name}`}
          image={tutor?.url_avatar}
          email={tutor?.email}
          coursesAmount={courses?.total}
        />
      </Col>
      <Col span={8}>
        <TutorPageSider bio={tutor?.bio} />
      </Col>
      <Col span={16}>
        <Flex gap={24} vertical>
          <div className={styles.courseTitle}>
            {tutor?.first_name} Courses ({courses?.total})
          </div>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <Row gutter={[24, 24]}>
              {courses?.data.map((item) => (
                <CourseCard
                  key={item.id}
                  imageUrl={item.image_url}
                  title={item.title}
                  id={item.id}
                  categories={item.categories}
                  usersCount={item.users_count}
                  price={item.product?.price}
                />
              ))}
            </Row>
          )}
        </Flex>
      </Col>
    </Row>
  );
};
