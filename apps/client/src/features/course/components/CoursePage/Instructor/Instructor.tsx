import { Flex, Spin } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { LoadingOutlined } from '@ant-design/icons';
import { InstructorItem } from './InstructorItem';
import { routes } from '@client/const';

export const Instructor = () => {
  const { id } = useParams();
  const { styles } = useStyles();
  const navigate = useNavigate();

  if (!id) {
    navigate(routes.main);
    return;
  }

  const { data: course, isLoading: isCourseLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id),
  });

  if (isCourseLoading)
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;

  if (!course?.authors) return <div>No instructor information available.</div>;

  return (
    <Flex vertical gap={20}>
      <div className={styles.instructorTitle}>Course Instructor</div>
      {course.authors.map((author) => (
        <InstructorItem key={author.id} tutor={author} />
      ))}
    </Flex>
  );
};
