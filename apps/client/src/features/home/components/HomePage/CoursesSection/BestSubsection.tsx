import { Col, Flex, Row, Spin } from 'antd';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@clientApi';
import { LoadingOutlined } from '@ant-design/icons';
import { CourseCard } from '@clientComponents';
import { GetCoursesRequest } from '@clientTypes';

export const BestSubsection = () => {
	const { styles } = useStyles();

	const params: GetCoursesRequest = {
		per_page: 8,
		page: 1,
		order: 'ASC',
		order_by: 'title',

	};

	const { data: courses, isLoading, isError } = useQuery({
		queryKey: ['myCourses', { params }],
		queryFn: () => api.courses.getAllCourses(params),
	});

	if (isError) return <div>error of course</div>;

	return (
		<Flex gap={40} vertical align="center" justify="center">
			<div className={styles.title}>Best selling courses</div>
			{
				isLoading
					? <Spin indicator={<LoadingOutlined spin />} size="large" />
					: <Row gutter={[24, 24]} className={styles.coursesWrapper}>
						{courses!.data.map((item) => (
							<Col key={item.id} lg={12} xl={5}>
								<CourseCard
									key={item.id}
									image_url={item.image_url}
									title={item.title}
									id={item.id}
									categories={item.categories}
									users_count={item.users_count}
									price={item.product?.price}
								/>
							</Col>
						))}
					</Row>
			}

		</Flex>
	);
};