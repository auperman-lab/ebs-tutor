import { Button, Divider, Flex, Input, Select } from 'antd';
import { Faders, MagnifyingGlass } from '@clientAssets';
import { useStyles } from './styles';
import { useState } from 'react';
import { useURLQuery } from '@clientHooks';

const sort = [
	{
		label: 'Descendant',
		value: 'DESC',
	},
	{
		label: 'Ascendant',
		value: 'ASC',
	},

];

type ListHeaderProps = {
	totalItems: number;
};

export const ListHeader = ({ totalItems }: ListHeaderProps) => {
	const { styles } = useStyles();
	const { setParams, getParams } = useURLQuery();

	const params = getParams();
	const [searchText, setSearchText] = useState<string>(params.search || '');
	const filterQuantity = (params.category?.length || 0) + (params.tag?.length || 0);

	const onSuggestionClick = (e: React.MouseEvent<HTMLElement>) => {
		const text = (e.target as HTMLElement).innerText;
		setSearchText(text);
		setParams({ search: text, page: 1 });
	};
	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
		setParams({ search: e.target.value, page: 1 });
	};
	const onSortChange = (value: 'ASC' | 'DESC') => {
		setParams({ sort: value, page: 1 });
	};
	return (
		<Flex vertical gap={12}>
			<Flex align="center" justify="space-between">
				<Flex gap={24}>
					<Button className={styles.filterButton} size="large">
						<Flex gap={12} justify="space-evenly" align="center">
							<Faders />
							Filter
							{filterQuantity ? <div className={styles.filterQuantity}>{filterQuantity}</div> : <div />}
						</Flex>
					</Button>
					<Input
						addonBefore={<MagnifyingGlass />}
						size="large"
						placeholder="Search"
						value={searchText}
						className={styles.search}
						onChange={(e) => onSearchChange(e)}
					/>
				</Flex>

				<Flex gap={24}>
					<Flex align="center" className={styles.sortText}>Sort By: </Flex>
					<Select
						size="large"
						defaultValue={params.sort || 'ASC'}
						className={styles.select}
						options={sort}
						onChange={onSortChange}
					/>
				</Flex>
			</Flex>
			<Flex align="center" justify="space-between">
				<Flex align="center" justify="start">
					<div>Suggestion:</div>
					<Button type="text" className={styles.suggestion} onClick={onSuggestionClick}>user interface</Button>
					<Button type="text" className={styles.suggestion} onClick={onSuggestionClick}>user non interface</Button>
					<Button type="text" className={styles.suggestion} onClick={onSuggestionClick}>user abstract Class</Button>
				</Flex>
				<Flex gap={3}>
					Found <div className={styles.bold}>{totalItems}</div> results
				</Flex>
			</Flex>
			<Divider className={styles.dividerNoMargin} />
		</Flex>
	);
};
