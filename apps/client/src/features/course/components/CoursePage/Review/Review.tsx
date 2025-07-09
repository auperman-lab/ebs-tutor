import { useStyles } from './styles';
import { Flex, Select } from 'antd';
import { Rating } from './Rating';
import { ReviewItem } from './ReviewItem';

const options = [
	{
		label: '5 Star Rating',
		value: '5'
	},
	{
		label: '4 Star Rating',
		value: '4'
	},
	{
		label: '3 Star Rating',
		value: '3'
	},
	{
		label: '2 Star Rating',
		value: '2'
	},
	{
		label: '1 Star Rating',
		value: '1'
	},
]

export const Review = () => {
	const { styles } = useStyles();
	return (
		<Flex vertical gap={40}>
			<div className={styles.reviewTitle}>Course Rating</div>
			<Rating/>

			<Flex justify='space-between' align="center">
				<div className={styles.reviewTitle}>Students Feedback</div>
				<Select
					defaultValue={"5"}
					variant="borderless"
					options={options}
					className={styles.select}
				/>
			</Flex>

			<ReviewItem/>

		</Flex>

	);
};
