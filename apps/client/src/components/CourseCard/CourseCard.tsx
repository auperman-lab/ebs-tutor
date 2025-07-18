import {
  Card,
  Col,
  Divider,
  Flex,
  Image,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { Category } from '@client/types';
import { NoImage, Star, User } from '@client/assets';
import { routes } from '@client/const';
import { useStyles } from './styles';
import { useTheme } from 'antd-style';
import { formatPrice } from '@client/utils';

const { Text } = Typography;

type CourseCardProps = {
  title: string;
  id: number;
  usersCount: number;
  imageUrl: string;
  categories: Category[];
  price?: number;
};

export const CourseCard = ({
  title,
  id,
  usersCount,
  imageUrl,
  price,
  categories,
}: CourseCardProps) => {
  const navigate = useNavigate();
  const { styles } = useStyles();
  const palette = useTheme();

  const onClick = () => {
    navigate(routes.courses + `/${id}`);
  };
  return (
    <Col key={id}  lg={12} xl={8}>
      <Card
        hoverable
        cover={
          imageUrl ? (
            <Image
              alt="example"
              src={imageUrl}
              height={200}
              preview={false}
              className={styles.cover}
            />
          ) : (
            <NoImage className={styles.cover} height={200} />
          )
        }
        onClick={onClick}
      >
        <Flex vertical>
          <Flex justify="space-between" align="center">
            <Flex className={styles.tagContainer}>
              {categories?.length ? (
                categories.map((category) => (
                  <Tag
                    key={category.id}
                    bordered={false}
                    className={styles.tag}
                  >
                    {category.name.toUpperCase()}
                  </Tag>
                ))
              ) : (
                <div className={styles.emptyTag}></div>
              )}
            </Flex>

            <div className={styles.price}>{formatPrice(price)}</div>
          </Flex>

          <Tooltip
            title={title}
            placement="topRight"
            color={palette.common.black}
            arrow={false}
          >
            <div className={styles.title}>{title}</div>
          </Tooltip>

          <Divider className={styles.divider} />
          <Flex justify="space-between" align="center" gap={24}>
            <Flex align="center" gap={6}>
              <Star />
              <Text className={styles.text}>{4.1}</Text>
            </Flex>
            <Flex align="center" gap={6}>
              <User />
              {usersCount}
              <Text type="secondary" color="#4E5566">
                {' '}
                students
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Col>
  );
};
