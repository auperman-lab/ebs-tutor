import {
  Card,
  Col,
  Divider,
  Dropdown,
  Flex,
  Image,
  MenuProps,
  Row,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { useStyles } from './styles';
import { DotsThree, NoImage, Star, User } from '@assets';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { routes } from '@const';
import { useQuery } from '@tanstack/react-query';
import { api } from '@api';
import { GetCoursesRequest } from '@types';
import { ParamsType } from '@features/courses/types';
import { useTheme } from 'antd-style';
import { CoursesCardSkeleton } from './CoursesCardSkeleton';
import { FailComponent } from '@features/not-found/components';

const { Text } = Typography;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
  },
  {
    key: '3',
    label: 'Billing',
  },
  {
    key: '4',
    label: 'Settings',
  },
];

export const CoursesCards = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const palette = useTheme();
  const [searchParams] = useSearchParams();

  const getQueryParams = (): GetCoursesRequest => {
    return {
      title: searchParams.get('search') || undefined,
      order: (searchParams.get('sort') as ParamsType['sort']) || 'ASC',
      order_by: 'title',
      tag: searchParams.get('tag') || undefined,
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      per_page: 12,
      category_id: searchParams.get('category')
        ? Number(searchParams.get('category'))
        : undefined,
    };
  };

  const params = getQueryParams();

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['myCourses', params],
    queryFn: () => api.courses.getAllCourses(params),
  });

  if (isLoading) return <CoursesCardSkeleton quantity={8} />;
  if (isError) return <FailComponent message="Failed to load courses" />;

  return (
    <Row gutter={[24, 24]} className={styles.width}>
      {courses!.data.map((item) => (
        <Col key={item.id} md={12} lg={8} xl={6}>
          <Card
            hoverable
            cover={
              item.image_url ? (
                <Image
                  alt="example"
                  src={item.image_url}
                  onClick={() => {
                    navigate(routes.courses + `/${item.id}`);
                  }}
                  height={(courses!.total ?? 0) > 4 ? 200 : '100%'}
                  preview={false}
                  className={styles.cover}
                />
              ) : (
                <NoImage
                  className={styles.cover}
                  height={200}
                  onClick={() => {
                    navigate(routes.courses + `/${item.id}`);
                  }}
                />
              )
            }
          >
            <Flex vertical>
              <Flex className={styles.tagContainer}>
                {item.categories?.length ? (
                  item.categories.map((category) => (
                    <Tag
                      key={category.id}
                      bordered={false}
                      className={styles.tag}
                    >
                      {category.name.toUpperCase()}
                    </Tag>
                  ))
                ) : (
                  <div className={styles.emptyTag}>No tags provided</div>
                )}
              </Flex>

              <Tooltip
                title={item.title}
                placement="topRight"
                color={palette.common.black}
                arrow={false}
              >
                <div className={styles.title}>{item.title}</div>
              </Tooltip>

              <Divider className={styles.divider} />
              <Flex justify="space-between" align="center" gap={24}>
                <Flex align="center" gap={6}>
                  <Star />
                  <Text className={styles.text}>{4.1}</Text>
                </Flex>
                <Flex align="center" gap={6}>
                  <User />
                  {item.users_count}
                  <Text type="secondary" color="#4E5566">
                    {' '}
                    students
                  </Text>
                </Flex>
              </Flex>
              <Divider className={styles.divider} />
              <Flex justify="space-between" align="center">
                <div className={styles.price}>
                  {item.product?.price === 0
                    ? 'Free'
                    : item.product?.price != null
                    ? `$${item.product.price.toFixed(2)}`
                    : 'N/A'}
                </div>
                <Dropdown menu={{ items }} trigger={['hover']} arrow>
                  <div tabIndex={0}>
                    <DotsThree />
                  </div>
                </Dropdown>
              </Flex>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
