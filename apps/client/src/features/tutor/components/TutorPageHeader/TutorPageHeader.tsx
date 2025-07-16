import { Avatar, Button, Flex } from 'antd';
import { useStyles } from './styles';
import { Facebook, NoImage, Star, User } from '@client/assets';

type TutorPageHeaderProps = {
	image?: string;
	name?: string;
	email?: string;
	coursesAmount?: number;
}

export const TutorPageHeader = ({image, name, email, coursesAmount}:TutorPageHeaderProps) => {
	const {styles} = useStyles();


	const onEmailShare = () => {
		const subject = encodeURIComponent('Check out this course!');
		const body = encodeURIComponent(`I thought you might find this course interesting: ${window.location.href}`);
		window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
	};

	const onTwitterShare = () => {
		const text = encodeURIComponent('Check out this course!');
		const url = encodeURIComponent(window.location.href);
		window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
	};

	const onFacebookShare = () => {
		const url = encodeURIComponent(window.location.href);
		window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
	};

	const onLinkedInShare = () => {
		const url = encodeURIComponent(window.location.href);
		window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
	};

	return (
		<Flex  justify='space-between' align='center' className={styles.wrapper}>
			<Flex gap={24} align='center'>
				{
					image
						? <Avatar src={image} shape='circle' className={styles.image}/>
						: <NoImage className={styles.image}/>

				}
				<Flex vertical gap={24} className={styles.infoWrapper} justify='space-evenly'>
					<Flex vertical align='star' gap={10}>
						<div className={styles.title}>{name}</div>
						<div className={styles.subtitle}>{email}</div>
					</Flex>
					<Flex justify="space-between" align='center'>
						<Flex gap={6}>
							<Star />
							<div className={styles.text}>4.8</div>
							<div className={styles.secondaryText}>(112 reviews)</div>
						</Flex>
						<Flex gap={6}>
							<User />
							<div className={styles.text}>117</div>
							<div className={styles.secondaryText}>students</div>
						</Flex>
						<Flex gap={6}>
							{/*todo: change after course page merge*/}
							<User />
							<div className={styles.text}>{coursesAmount}</div>
							<div className={styles.text}>courses</div>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			<Flex align='end' gap={16} vertical>
				<Button size='large' type='link'>LinkToSomething</Button>
				<Flex gap={8}>
					{/*todo: change icon upon coursepage merge*/}
					<Button size="large" className={styles.smallButton} icon={<Facebook />} onClick={onEmailShare} />
					<Button size="large" className={styles.smallButton} icon={<Facebook />} onClick={onTwitterShare} />
					<Button size="large" className={styles.smallButton} icon={<Facebook />} onClick={onFacebookShare} />
					<Button size="large" className={styles.smallButton} icon={<Facebook />} onClick={onLinkedInShare} />
				</Flex>

			</Flex>
		</Flex>
	)
}