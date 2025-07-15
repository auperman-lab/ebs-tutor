import { useStyles } from './styles';
import { Avatar, Button, Divider, Flex, List, Tag } from 'antd';
import { Author, Category } from '@client/types';
import { Heart, Star, User } from '@client/assets';

type CustomTooltipProps = {
	title: string;
	author: Author;
	duration?: number;
	level: string;
	usersCount: number;
	price?: number | null;
	price_old?: number | null;
	categories: Category[];
};


const learnData = [
	{
		title: 'You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.',
	},
	{
		title: 'You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.',
	},
	{
		title: 'Understand how to use both the Jupyter Notebook and create .py files',
	},
];

export const CustomTooltip = ({
																title,
																usersCount,
																price,
																price_old,
																level,
																duration,
																author,
																categories,
															}: CustomTooltipProps) => {

	const { styles } = useStyles();

	const getPrice = (): string => {
		if (price === 0) return 'Free';
		if (price != null) return `$${price.toFixed(2)}`;
		return 'N/A';
	};

	const getOldPrice = (): string => {
		if (price_old != null && price_old !== price) {
			return `$${price_old.toFixed(2)}`;
		}
		return '';
	};
	const getDiscount = (): string => {
		if (price_old != null && price != null && price_old !== price) {
			return `${(price_old - price) * 100 / price_old}%`;
		}
		return '';
	};


	return (
		<Flex gap={20} vertical style={{ backgroundColor: 'white', color: 'black' }}>
			<Flex gap={16} vertical align="start" justify="center">
				<Flex gap={10} vertical>
					<Flex className={styles.tagContainer}>
						{categories?.length ? (
							categories.map((category) => (
								<Tag key={category.id} bordered={false} className={styles.tag}>
									{(category.name).toUpperCase()}
								</Tag>
							))
						) : (
							<div className={styles.emptyTag}>
							</div>
						)}
					</Flex>
					<div className={styles.tooltipTitle}>{title}</div>
				</Flex>
				<Flex justify="space-evenly" style={{ width: '100%' }}>
					{
						author
							? <Flex gap={8} align="center">
								<Avatar
									src={author.url_avatar}
									className={styles.avatar}
								/>
								<Flex vertical gap={4}>
									<div className={styles.secondaryText}>Course by:</div>
									<div className={styles.text}>{author.first_name} {author.last_name}</div>
								</Flex>
							</Flex>
							: <Flex gap={8} align="center">
								<Avatar
									icon={<User />}
									className={styles.avatar}
								/>
								<Flex vertical gap={4}>
									<div className={styles.secondaryText}>Course by:</div>
									<div className={styles.text}>User Name</div>
								</Flex>
							</Flex>

					}

					<Flex align="center">
						<Star />
						<div className={styles.text}>{4.1}</div>
						<div className={styles.secondaryText}> (1,241 Rating)</div>
					</Flex>

				</Flex>
			</Flex>
			<Flex className={styles.statsWrapper} justify="space-evenly">
				<Flex gap={6}>
					<User />
					<div className={styles.text}>{usersCount}</div>
				</Flex>
				<Flex gap={6}>
					{/*todo: change after course page merge*/}
					<User />
					<div className={styles.text}>{level ? level : '99'}</div>
				</Flex>
				<Flex gap={6}>
					{/*todo: change after course page merge*/}
					<User />
					<div className={styles.text}>{duration ? duration : '99h'}</div>
				</Flex>
			</Flex>
			<Flex justify="space-between" className={styles.priceWrapper}>
				<Flex gap={8} align="center" justify="center">
					<div className={styles.price}>
						{getPrice()}
					</div>
					<div className={styles.priceOld}>
						{getOldPrice()}
					</div>
					{
						getDiscount() && (
							<Flex gap={10} className={styles.discount}>
								{getDiscount()} OFF
							</Flex>
						)
					}
				</Flex>
				<Button size="large" className={styles.button} icon={<Heart />} />
			</Flex>
			<Divider className={styles.dividerNoMargin} />
			<Flex vertical gap={8}>
				<div className={styles.checkTitle}>WHAT YOU'LL LEARN</div>
				<List
					grid={{
						column: 1
					}}
					dataSource={learnData}
					renderItem={(item) => (
						<List.Item key={item.title}>
							<Flex gap={8}>
								{/*todo:  change after course page merge*/}
								<Star className={styles.checkIcon} />
								<div className={styles.secondaryText}>{item.title}</div>
							</Flex>
						</List.Item>
					)}
				/>
			</Flex>
			<Divider className={styles.dividerNoMargin} />
			<Flex vertical gap={12}>
				<Button size="large" className={styles.mediumButton} type="primary">Add To Wishlist</Button>
				<Button size="large" className={styles.button} type="primary">Gift Course</Button>
			</Flex>

		</Flex>

	);
};
