import { Button, Flex } from 'antd';
import { ArrowRight, BecomeInstructorImg } from '@client/assets';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { routes } from '@client/const';

export const BecomeInstructorSubsection = () => {
	const { styles } = useStyles();
	const navigate = useNavigate();

	const onClick = () => {
		navigate(routes.becomeInstructor);
	};

	return (
		<Flex align="center" className={styles.wrapperLeft}>
			<Flex gap={24} vertical align="start" justify="center">
				<Flex gap={12} vertical align="start" justify="center" className={styles.infoWrapper}>
					<div className={styles.title}>Become an Instructor</div>
					<div className={styles.text}>Instructors from around the world teach millions of students on Udemy. We provide
						the tools and skills to
						teach what you love.
					</div>
				</Flex>
				<Button size="large" className={styles.button} onClick={onClick}>
					<Flex gap={8} align="center">
						Start Teaching
						<ArrowRight />
					</Flex>
				</Button>

			</Flex>

			<img
				className={styles.image}
				src={BecomeInstructorImg}
			/>
		</Flex>
	);
};