import { Author, Category } from '@client/types';
import { Avatar, Divider, Flex, Tag, Tooltip } from 'antd';
import { routes } from '@client/const';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { NoImage, Star, User } from '@client/assets';


type CourseCardWideProps = {
	title: string,
	id: number,
	author: Author
	usersCount: number
	image_url: string
	categories: Category[]
	price?: number
	price_old?: number
	level: string;
	duration: string

}

export const CourseCardWide = ({
																 title,
																 id,
																 usersCount,
																 level,
																 duration,
																 image_url,
																 price,
																 price_old,
																 categories,
																 author
															 }: CourseCardWideProps) => {
	const navigate = useNavigate();
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

	const onClick = () => {
		navigate(routes.courses + `/${id}`);
	};
	return (
		<Flex
			onClick={onClick}
			className={styles.cardWrapper}
		>
			{image_url
				? <img
					className={styles.cardImage}
					src={image_url}
				/>
				: <NoImage
					className={styles.cardEmptyImage}
				/>
			}

			<Flex vertical gap={17} className={styles.infoWrapper}>
				<Flex vertical gap={8}>
					<Flex justify="space-between" align="center" className={styles.pricetagWrapper}>
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
						<Flex gap={8} align="center" justify="center">
							<div className={styles.price}>
								{getPrice()}
							</div>
							<div className={styles.priceOld}>
								{getOldPrice()}
							</div>

						</Flex>
					</Flex>

					<Tooltip>
						<div className={styles.cardTitle}>{title}</div>
					</Tooltip>
				</Flex>
				<Flex justify="space-between" align="center">
					{
						author
							? <Flex gap={12} align="center">
								<Avatar
									src={author.url_avatar}
									className={styles.avatar}
								/>
								<div className={styles.text}>{author.first_name} {author.last_name}</div>
							</Flex>
							: <Flex gap={12} align="center">
								<Avatar
									icon={<User />}
									className={styles.avatar}
								/>
								<div className={styles.text}>User Name</div>
							</Flex>

					}
					<Flex align="center">
						<Star />
						<div className={styles.text}>{4.1}</div>
						<div className={styles.secondaryText}> (1,241 Rating)</div>
					</Flex>
				</Flex>

				<Divider className={styles.dividerNoMargin}/>
				<Flex className={styles.statsWrapper} justify="space-between">
					<Flex gap={6}  align='center'>
						<User />
						<div className={styles.text}>{usersCount}</div>
					</Flex>
					<Flex gap={6}  align='center'>
						{/*todo: change after course page merge*/}
						<User />
						<div className={styles.text}>{level ? level : '99'}</div>
					</Flex>
					<Flex gap={6} align='center'>
						{/*todo: change after course page merge*/}
						<User />
						<div className={styles.text}>{duration ? duration : '99h'}</div>
					</Flex>
				</Flex>

			</Flex>
		</Flex>
	);
};