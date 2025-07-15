import { Button, Col, Flex, Grid, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { useStyles } from './styles';
import { InstructorCard } from '@client/components';
import { ArrowRight } from '@client/assets';
import { useNavigate } from 'react-router-dom';
import { routes } from '@client/const';

const { useBreakpoint } = Grid;


export const InstructorSubsection = () => {
	const { styles } = useStyles();
	const screens = useBreakpoint();
	const navigate = useNavigate();

	let visibleCount = 2;

	if (screens.xl) {
		visibleCount = 4;
	} else if (screens.lg) {
		visibleCount = 3;
	} else if (screens.md) {
		visibleCount = 2;
	} else if (screens.sm) {
		visibleCount = 2;
	}


	const { data: tutors = [], isLoading: isLoadingTutors } = useQuery({
		queryKey: ['tutors'],
		queryFn: api.courses.getTutors,
		staleTime: Infinity,
	});

	const onButtonClick = () => {
		navigate(routes.becomeInstructor);
	};

	return (
		<Flex vertical gap={40} className={styles.wrapper} align="center" justify="center">
			<Flex align="center" justify="center" className={styles.fullWidth}>
				<div className={styles.title}>Top instructor of the month</div>
			</Flex>

			{
				isLoadingTutors
					? <Spin indicator={<LoadingOutlined spin />} size="large" />
					: <Row gutter={[24, 24]} className={styles.fullWidth}>
						{(tutors?.slice(0, visibleCount))?.map((item) => (
							<Col key={item.id} sm={12} md={12} lg={8} xl={6}>
								<InstructorCard
									key={item.id}
									id={item.id}
									name={`${item.first_name} ${item.last_name}`}
									hobbies={item.interests}
									icon={item.url_avatar}

								/>
							</Col>
						))}
					</Row>
			}

			<Flex gap={12} align="center">
				<div className={styles.text}>Thousands of students waiting for a instructor. Start teaching & earning now!</div>
				<Button type="text" className={styles.button} onClick={onButtonClick}>
					<Flex gap={8} align="center" justify="center">
						<div>Become Instructor</div>
						<ArrowRight />
					</Flex>
				</Button>
			</Flex>

		</Flex>
	);
};