import { Button, Flex, Input, Select } from 'antd';
import { Faders, MagnifyingGlass } from '@clientAssets';
import { useStyles } from './styles';

const sort = [
	{
		label: "Descendant",
		value: "DESC",
	},
	{
		label: "Ascendant",
		value: "ASC",
	},

];

export const ListHeader = () => {

	const { styles } = useStyles();
	return (
		<Flex align='center' justify='space-between'>
			<Flex gap={24}>
				<Button className={styles.filterButton} size="large">
					<Flex justify='space-evenly' align='center'  className={styles.filterInsides}>
						<Faders/>
						Filter
					</Flex>
				</Button>
				<Input
					addonBefore={<MagnifyingGlass />}
					size='large'
					placeholder='Search'
					className={styles.search}
				/>
			</Flex>

			<Flex gap={24}>
				<Flex align="center" className={styles.sortText}>Sort By: </Flex>
				<Select
					size="large"
					defaultValue="ASC"
					className={styles.select}
					options={sort}
				/>
			</Flex>


		</Flex>
	);
};
