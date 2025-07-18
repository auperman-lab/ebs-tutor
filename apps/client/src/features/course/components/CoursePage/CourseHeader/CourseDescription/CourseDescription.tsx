import { Flex, Image, Rate, Typography } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseDescriptionSkeleton } from './CourseDescriptionSkeleton';
import { useStyles } from './styles';
import { api } from '@client/api/api';
import { routes } from '@client/const';

const { Text, Title } = Typography;
export const CourseDescription = () => {
  const { styles } = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate(routes.main);
    return;
  }

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id),
  });

  if (isLoading) return <CourseDescriptionSkeleton />;
  if (!course) return <Text type="danger">No course data found.</Text>;

  return (
    <Flex vertical gap={40} className={styles.description}>
      <Flex vertical gap={12}>
        <Title level={4}>{course.title}</Title>
        <Text type="secondary">{course.subtitle}</Text>
      </Flex>
      <Flex justify="space-between">
        <Flex gap={12}>
          <Flex className={styles.avatarGroup}>
            {course.authors?.map((author, id) => (
              <img
                alt={`${id}`}
                key={id}
                src={author.url_avatar}
                className={styles.avatar}
              />
            ))}
          </Flex>
          <Flex vertical gap={4}>
            <Text type="secondary">Created by:</Text>
            <Text className={styles.authors}>
              {course.authors
                ?.map((author) => author.first_name + ' ' + author.last_name)
                .join(' • ')}
            </Text>
          </Flex>
        </Flex>

        <Flex gap={8} align="center">
          <Flex>
            <Rate disabled defaultValue={4.1} />
          </Flex>
          <Flex align="center" gap={8}>
            <Text className={styles.ratingScore}>{4.1}</Text>
            <Text type="secondary"> (1,241 Rating)</Text>
          </Flex>
        </Flex>
      </Flex>
      <div>
        {course.video_url ? (
          <video
            src={course.video_url}
            width="100%"
            height="auto"
            controls
            className={styles.video}
          />
        ) : (
          <Image
            src={course.image_url}
            alt={course.title}
            width="100%"
            className={styles.video}
          />
        )}
      </div>
    </Flex>
  );
};
