import { Col, Flex, Row, Spin } from 'antd';
import { Filter, ListHeader } from '@clientFeatures/courseList';
import { api } from '@clientApi';
import { useQuery } from '@tanstack/react-query';
import { LoadingOutlined } from '@ant-design/icons';
import { useStyles } from './styles';
import { CourseCard, PaginationComponent } from '@clientComponents';
import { useURLQuery } from '@clientHooks';


export const CourseListPage = () => {
	const { styles } = useStyles();
	const { getRequestParams } = useURLQuery();

	const params = getRequestParams();

	const { data: courses, isLoading, isError } = useQuery({
		queryKey: ['myCourses', { params }],
		queryFn: () => api.courses.getAllCourses(params),
	});

	if (isError) return <div>error of course</div>;

	return (
		<Row gutter={[24, 24]} className={styles.wrapper}>

			<Col span={24}>
				<ListHeader totalItems={courses?.total || 0} />
			</Col>

			<Col span={6}>
				<Filter />
			</Col>

			{
				isLoading
					? <Spin indicator={<LoadingOutlined spin />} size="large" />
					: <Col span={18}>
						<Row gutter={[24, 24]}>
							{courses!.data.map((item) => (
								<Col key={item.id} lg={12} xl={8}>

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

								<Flex justify="center" align="center" className={styles.pagination}>
							<PaginationComponent totalItems={courses?.total || 12} />
						</Flex>
					</Col>
			}

		</Row>
	);
};
