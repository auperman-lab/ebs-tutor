import { Checkbox, Collapse, Flex } from 'antd';
import { useStyles } from './styles';
import { useState } from 'react';
import { ChevronDown } from '@client/assets';

type FilterOption = {
	label: string;
	value: string;
	icon?: string
};

type FilterProps = {
	options: FilterOption[];
	label?: string;
	onChange?: (checked: string[]) => void;
	checkedItems?: string[];
};

export const FilterItem = ({ options, label = 'Filter', onChange, checkedItems }: FilterProps) => {

	const { styles } = useStyles();
	const [checkedValues, setCheckedValues] = useState<string[]>(checkedItems || []);

	const onCheckboxChange = (value: string, checked: boolean) => {
		const newChecked = checked
			? [...checkedValues, value]
			: checkedValues.filter((v) => v !== value);

		setCheckedValues(newChecked);
		onChange?.(newChecked);
	};

	const customHeader = (
		<Flex justify="space-between" align="center" style={{ width: '100%' }}>
			<Flex align="center" gap={8}>
				<span>{label?.toUpperCase()}</span>
			</Flex>
			<ChevronDown />

		</Flex>
	);

	return (
		<Collapse
			expandIconPosition="end"
			expandIcon={() => null}
			className={styles.collapse}
			size="large"
		>
			<Collapse.Panel header={customHeader} key="1">
				<Flex vertical gap={8}>
					{options.map((option) => (
						<Checkbox
							key={option.value}
							checked={checkedValues.includes(option.value)}
							onChange={(e) => onCheckboxChange(option.value, e.target.checked)}
						>
							<Flex justify={'space-between'} align={'center'} gap={10}>
								{option.icon ?
									<img alt="icon" height={20} src={option.icon} /> :
									<div className={styles.optionIcon}></div>
								}
								<div className={styles.optionLabel}>{option.label}</div>

							</Flex>

						</Checkbox>
					))}
				</Flex>
			</Collapse.Panel>
		</Collapse>);
};
