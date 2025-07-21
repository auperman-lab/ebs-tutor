import { useRef } from 'react';
import { Button, Carousel, Col, Flex, Row, Spin, Typography } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { useTheme } from 'antd-style';
import { useQuery } from '@tanstack/react-query';
import {
  ArrowLeft,
  ArrowRight,
  CheckSquare,
  PlayCircle,
  Trophy,
  Users,
} from '@client/assets';
import { CourseCard, StatCard } from '@client/components';
import { useAuth } from '@client/hooks';
import { api } from '@client/api/api';
import { useStyles } from './styles';

const { Title } = Typography;

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export const DashboardTab = () => {
  const { styles } = useStyles();
  const palette = useTheme();
  const { user } = useAuth();
  const carouselRef = useRef<CarouselRef | null>(null);

  const dataItems = [
    {
      id: 1,
      color: palette.primary.primary100,
      title: '957',
      subtitle: 'Enrolled Courses',
      icon: (
        <PlayCircle width={32} height={32} color={palette.primary.primary500} />
      ),
    },
    {
      id: 2,
      color: palette.secondary.secondary100,
      title: '6',
      subtitle: 'Active Courses',
      icon: (
        <CheckSquare
          width={32}
          height={32}
          color={palette.secondary.secondary500}
        />
      ),
    },
    {
      id: 3,
      color: palette.success.success100,
      title: '951',
      subtitle: 'Completed Courses',
      icon: (
        <Trophy width={32} height={32} color={palette.success.success500} />
      ),
    },
    {
      id: 4,
      color: palette.warning.warning100,
      title: '241',
      subtitle: 'Course Instructors',
      icon: <Users width={32} height={32} color={palette.warning.warning500} />,
    },
  ];

  const { data: myCourseIdsData, isLoading: loadingCourseIds } = useQuery({
    queryKey: ['myCourseIds'],
    queryFn: () => api.courses.getMyCourses(),
  });

  const { data: myCourses, isLoading: loadingCourses } = useQuery({
    queryKey: ['myCourses', myCourseIdsData?.ids],
    queryFn: () =>
      api.courses.getAllCourses({
        'ids[]': myCourseIdsData?.ids || [],
      }),
    enabled: !!myCourseIdsData?.ids?.length,
  });

  const slides = myCourses?.data ? chunkArray(myCourses.data, 4) : [];

  return (
    <Flex vertical className={styles.container} gap={24}>
      <Title level={4}>Dashboard</Title>

      <Row gutter={[24, 24]}>
        {dataItems.map((item) => (
          <Col xs={24} sm={12} md={6} key={item.id}>
            <StatCard
              color={item.color}
              title={item.subtitle}
              subtitle={item.title}
              icon={item.icon}
            />
          </Col>
        ))}
      </Row>

      <Flex justify="space-between" align="center">
        <Title level={4}>Let’s start learning, {user?.fullName}</Title>
        <Flex gap={8}>
          <Button
            icon={<ArrowLeft />}
            onClick={() => carouselRef.current?.prev()}
          />
          <Button
            icon={<ArrowRight />}
            onClick={() => carouselRef.current?.next()}
          />
        </Flex>
      </Flex>

      {loadingCourseIds || loadingCourses ? (
        <Spin size="large" className={styles.spinner} />
      ) : (
        <Carousel ref={carouselRef} dots={false}>
          {slides.map((slide, index) => (
            <div key={index}>
              <Row gutter={[24, 24]} justify="start">
                {slide.map((item) => (
                  <Col key={item.id} xs={24} sm={12} md={6}>
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
            </div>
          ))}
        </Carousel>
      )}
    </Flex>
  );
};
