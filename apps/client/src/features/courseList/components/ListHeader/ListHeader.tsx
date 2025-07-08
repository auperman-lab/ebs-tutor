import { Button, Divider, Flex, Input, Select } from 'antd';
import { Faders, MagnifyingGlass } from '@clientAssets';
import { useStyles } from './styles';
import { useState } from 'react';

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

	const [amount] = useState<number>(255);
	const [searchText, setSearchText] = useState<string>(''); // <-- track input value

	const onSuggestionClick = (e: React.MouseEvent<HTMLElement>) => {
		const text = (e.target as HTMLElement).innerText;
		setSearchText(text);
	};
	return (
		<Flex vertical gap={12}>
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
						value={searchText}
						className={styles.search}
						onChange={(e) => setSearchText(e.target.value)}
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
			<Flex align='center' justify='space-between'>
				<Flex align='center' justify='start' >
					<div>Suggestion:</div>
					<Button type="text" className={styles.suggestion} onClick={onSuggestionClick}>user interface</Button>
					<Button type="text" className={styles.suggestion} onClick={onSuggestionClick}>user non interface</Button>
					<Button type="text" className={styles.suggestion} onClick={onSuggestionClick}>user abstract Class</Button>
				</Flex>
				<Flex gap={3} >
					Found <div className={styles.bold}>{amount}</div> results
				</Flex>
			</Flex>
			<Divider className={styles.dividerNoMargin} />
		</Flex>
	);
};
