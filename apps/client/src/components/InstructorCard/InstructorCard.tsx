import { useStyles } from './styles';
import { Button, Card, Divider, Flex, Image } from 'antd';
import { NoImage, Star } from '@client/assets';
import { useNavigate } from 'react-router-dom';
import { routes } from '@client/const';

type InstructorCardProps = {
	id: number,
	name: string,
	bio: string,
	icon: string,
	isLoggedIn?: boolean,
}

export const InstructorCard = ({ id, name, bio, icon, isLoggedIn = false }: InstructorCardProps) => {
	const { styles } = useStyles();

	const navigate = useNavigate();


	const onClick = () => {
		navigate(routes.teacher + `/${id}`);
	};

	return (
		<Card
			hoverable
			cover={
				icon ? (
					<Image
						alt="example"
						src={icon}
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
			<Flex vertical gap={12}>
				<Flex vertical gap={4} align="center">
					<div className={styles.title}>{name}</div>
					<div className={styles.hobbies}>{bio}</div>
				</Flex>
				<Divider className={styles.divider} />
				<Flex justify="space-between" align="center" gap={24}>
					<Flex align="center" gap={6}>
						<Star />
						<div className={styles.text}>{4.1}</div>
					</Flex>
					<Flex align="center" gap={6}>
						511
						<div className={styles.secondary}>
							{' '}students
						</div>
					</Flex>
				</Flex>
				{isLoggedIn && <Button type='primary' className={styles.button}>Send Message</Button>}
			</Flex>
		</Card>
	);
};