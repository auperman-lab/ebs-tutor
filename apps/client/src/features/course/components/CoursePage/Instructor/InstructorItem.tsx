import { Avatar, Flex, Tooltip } from 'antd';
import { useStyles } from './styles';
import { Author } from '@clientTypes';
import { NoImage, Star, User } from '@clientAssets';

type InstructorItemProps = {
	tutor: Author;
}

export const InstructorItem = ({ tutor }: InstructorItemProps) => {
	const { styles } = useStyles();
	return (

		<Flex gap={24} className={styles.instructorWrapper}>
			<div>
				{
					tutor.url_avatar ? (
						<Avatar
							alt="example"
							src={tutor.url_avatar}
							className={styles.avatar}
						/>
					) : (
						<NoImage className={styles.avatar} />
					)
				}
			</div>

			<Flex vertical gap={16} align="start" justify="start">
				<Flex vertical gap={6} align="start" justify="start">
					<div className={styles.tutorName}>{tutor.first_name} {tutor.last_name}</div>
					<div className={styles.tutorInterests}>
						{tutor.interests?.map((item) => item + ' ' + item).join(' • ')}
					</div>
				</Flex>
				<Flex gap={24} align="start" justify="center">
					<Flex align="center" gap={6}>
						<Star />
						<div className={styles.textImportant}>{4.1}</div>
						<div className={styles.textSecondary}>{' '}Course rating</div>
					</Flex>

					<Flex align="center" gap={6}>
						<User />
						<div className={styles.textImportant}>5,342</div>
						<div className={styles.textSecondary}>{' '}students</div>
					</Flex>
				</Flex>

				<Tooltip title={tutor.bio}>
					<div className={styles.textBio}>
						{tutor.bio}
					</div>
				</Tooltip>			</Flex>


		</Flex>

	);
};