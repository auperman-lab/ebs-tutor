import { Flex, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@clientApi';
import { LoadingOutlined } from '@ant-design/icons';
import { InstructorItem } from './InstructorItem';

export const Instructor = () => {
  const { id } = useParams();
  const { styles } = useStyles();

  // First query to get the course
  const { data: course, isLoading: isCourseLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id!),
  });

  if (isCourseLoading)
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;

  if (!course?.author)
    return <div>No instructor information available.</div>;

  return (
    <Flex vertical gap={20}>
      <div className={styles.instructorTitle}>Course Instructor</div>
      <InstructorItem tutor={course.author} />
    </Flex>
  );
};
