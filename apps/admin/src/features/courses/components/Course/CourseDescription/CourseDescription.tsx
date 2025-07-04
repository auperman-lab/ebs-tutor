import { useStyles } from './styles';
import { Typography, Image, Flex, Divider, Button, Rate } from 'antd';
import { DotsThree } from '@assets';
import { useQuery } from '@tanstack/react-query';
import { api } from '@api';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { FailComponent } from '@features/not-found';
import { CourseDescriptionSkeleton } from './CourseDescriptionSkeleton';

const { Text, Title } = Typography;

export const CourseDescription = () => {
  const { styles } = useStyles();

  const { id } = useParams();

  const rating = 4.1;
  const ratingsReviewsNumber = 1231;

  const {
    data: course,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id!),
  });

  console.log(course);

  if (isLoading) return <CourseDescriptionSkeleton />;
  if (isError) return <FailComponent message="Failed to load courses" />;
  if (!course) return <Text type="danger">No course data found.</Text>;

  return (
    <Flex className={styles.mainPart} gap={24}>
      <Image width={352} height={264} src={course.image_url} preview={false} />
      <Flex vertical gap={10} className={styles.desctiption}>
        <Flex vertical gap={12}>
          <Flex gap={16}>
            <Text type="secondary" className={styles.datelabels}>
              Uploaded: {dayjs(course.created_at).format('MMM D, YYYY')}
            </Text>
            <Text type="secondary" className={styles.datelabels}>
              Last Update: {dayjs(course.updated_at).format('MMM D, YYYY')}
            </Text>
          </Flex>
          <Title level={4}>{course.title}</Title>
          <Text type="secondary">{course.description}</Text>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={12}>
            <Flex className={styles.avatarGroup}>
              {course.authors?.map((author, id) => (
                <img
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
              <Rate disabled defaultValue={rating} />
            </Flex>
            <Flex align="center" gap={8}>
              <Text className={styles.ratingScore}>{rating}</Text>
              <Text type="secondary"> ({ratingsReviewsNumber} Rating)</Text>
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        <Flex justify="space-between">
          <Flex gap={32}>
            <Flex vertical gap={4}>
              <Text className={styles.price}>
                {course.product?.price === 0
                  ? 'Free'
                  : course.product?.price != null
                  ? `$${course.product.price.toFixed(2)}`
                  : 'N/A'}
              </Text>
              <Text type="secondary">Course prices</Text>
            </Flex>
            <Divider className={styles.divider} size="large" type="vertical" />
            <Flex vertical gap={4}>
              <Text className={styles.price}>
                $
                {(
                  (course.product?.sold_quantity ?? 0) *
                  (course.product?.price ?? 0)
                ).toFixed(2)}
              </Text>
              <Text type="secondary">USD dollar revenue</Text>
            </Flex>
          </Flex>
          <Flex gap={16} align="center">
            <Button type="primary" size="large">
              Withdrew money
            </Button>
            <Button size="large">
              <DotsThree />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
