import { useStyles } from './styles';
import { Button, Col, Flex, Grid, Row } from 'antd';
import { ArrowRight } from '@client/assets';
import { routes } from '@client/const';
import { useNavigate } from 'react-router-dom';
import { StatCard, StatCardSkeleton } from '@client/components';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { useTheme } from 'antd-style';

const { useBreakpoint } = Grid;

export const TopCategorySection = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const palette = useTheme();

  const colors = [
    palette.primary.primary100,
    palette.secondary.secondary100,
    palette.danger.danger100,
    palette.success.success100,
    palette.info.info100,
    palette.warning.warning100,
  ];

  let visibleCount = 4;

  if (screens.xl) {
    visibleCount = 12;
  } else if (screens.lg) {
    visibleCount = 8;
  } else if (screens.md || screens.sm) {
    visibleCount = 6;
  }
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: api.courses.getCategories,
    staleTime: Infinity,
  });

  const onButtonClick = () => {
    navigate(routes.courses);
  };

  const onCategoryClick = (id: number) => {
    navigate(`${routes.courses}?category=${id}`);
  };

  if (isError) return <div>error of course</div>;

  return (
    <Flex vertical align="center" justify="center" className={styles.wrapper}>
      <div className={styles.title}>Browse top category</div>

      <Row gutter={[24, 24]} className={styles.categoryWrapper}>
        {categories.slice(0, visibleCount).map((item, index) => (
          <Col xs={24} sm={12} md={6} lg={6} xl={6} key={item.id ?? index}>
            {isLoading ? (
              <StatCardSkeleton />
            ) : (
              <StatCard
                color={colors[index % colors.length]}
                title={item.name}
                subtitle={item.name}
                icon={item.icon}
                onClick={() => onCategoryClick(item.id)}
              />
            )}
          </Col>
        ))}
      </Row>

      <Flex gap={12} align="center">
        <div className={styles.text}>We have more category & subcategory.</div>
        <Button type="text" className={styles.button} onClick={onButtonClick}>
          <Flex gap={8} align="center" justify="center">
            <div>Browse all</div>
            <ArrowRight />
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};
