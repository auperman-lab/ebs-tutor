import { useStyles } from './styles';
import { LowerHeader } from './LowerHeader';
import { UpperHeader } from './UpperHeader';
import { Flex } from 'antd';


export const MainHeader = () => {
	const { styles } = useStyles();

	return (
			<Flex vertical className={styles.header}>
				<UpperHeader />
				<LowerHeader />
			</Flex>

	);
};
