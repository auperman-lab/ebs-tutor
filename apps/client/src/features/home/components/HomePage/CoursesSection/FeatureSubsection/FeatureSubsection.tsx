import { useStyles } from './styles';
import { Col, Flex, Grid, Row, Spin } from 'antd';
import { CourseCardWide } from './CourseCardWide';
import { GetCoursesRequest } from '@client/types';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { LoadingOutlined } from '@ant-design/icons';


const params: GetCoursesRequest = {
	per_page: 4,
	page: 1,
	order: 'ASC',
	order_by: 'title',
};

const { useBreakpoint } = Grid;


export const FeatureSubsection = () => {
	const { styles } = useStyles();
	const screens = useBreakpoint();

	let visibleCount = 4;

	if (screens.xl) {
		visibleCount = 4;
	} else if (screens.lg) {
		visibleCount = 2;
	} else if (screens.md) {
		visibleCount = 2;
	} else if (screens.sm) {
		visibleCount = 2;
	}

	const { data: courses, isLoading, isError } = useQuery({
		queryKey: ['myCourses', { params }],
		queryFn: () => api.courses.getAllCourses(params),
	});

	if (isError) return <div>error of course</div>;
	return (
		<Flex vertical gap={40} className={styles.wrapper} align="center" justify="center">
			<Flex justify="space-between" align="center" className={styles.titleWrapper}>
				<div className={styles.title}>Our feature Courses</div>
				<div className={styles.secondaryText}>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius
					purus et eleifend porta.
				</div>
			</Flex>

			{
				isLoading
					? <Spin indicator={<LoadingOutlined spin />} size="large" />
					: <Row gutter={[24, 24]} className={styles.fullWidth}>
						{(courses?.data?.slice(0, visibleCount))?.map((item) => (
							<Col key={item.id} sm={24} md={24} lg={24} xl={12}>
								<CourseCardWide
									key={item.id}
									author={item.author}
									title={item.title}
									image_url={item.image_url}
									id={item.id}
									categories={item.categories}
									usersCount={item.users_count}
									duration={item.duration}
									level={item.level}
									price={item.product?.price}
									price_old={item.product?.price_old}
								/>
							</Col>
						))}
					</Row>
			}

		</Flex>
	);
};