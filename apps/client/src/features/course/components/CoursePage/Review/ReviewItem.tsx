import { Avatar, Flex, List } from 'antd';
import { useStyles } from './styles';

const mockReviews = [
	{
		id: 1,
		name: 'Guy Hawkins',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
		timeAgo: '1 week ago',
		rating: 5,
		text:
			'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.',
	},
	{
		id: 2,
		name: 'Dianne Russell',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
		timeAgo: '51 mins ago',
		rating: 5,
		text:
			'This course is just amazing! Has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgable and I was never getting bored throughout the course...',
	},
	{
		id: 3,
		name: 'Bessie Cooper',
		avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
		timeAgo: '6 hours ago',
		rating: 5,
		text:
			'Webflow course was good, it covers design secrets, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox.',
	},
];


export const ReviewItem = () => {
	const { styles } = useStyles();

	return (
		<List
			itemLayout="vertical"
			dataSource={mockReviews}
			renderItem={(item) => (
				<List.Item key={item.id}>
					<Flex gap={16}>
						<Avatar src={item.avatar} alt={item.name}  className={styles.avatar}/>
						<Flex vertical gap={8}>
							<Flex gap={12} align="center">
								<Flex vertical>
									<div className={styles.name}>{item.name}</div>
									<div className={styles.timeAgo}>{item.timeAgo}</div>
								</Flex>
							</Flex>
							<div className={styles.stars}>
								{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
							</div>
							<div className={styles.text}>{item.text}</div>
						</Flex>
					</Flex>
				</List.Item>
			)}
		/>
	);
};