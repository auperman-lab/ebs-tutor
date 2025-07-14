import { Flex } from 'antd';
import { useStyles } from './styles';
import { BestSubsection } from './BestSubsection';
import { RecentSubsection } from './RecentSubsection';

export const CourseSection = () => {
	const {styles} = useStyles();

	return(
		<Flex vertical className={styles.wrapper} justify="space-evenly" align="center">
			<BestSubsection/>
			<RecentSubsection/>

		</Flex>
	)
};