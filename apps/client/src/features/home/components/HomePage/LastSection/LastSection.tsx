import { Flex } from 'antd';
import { BecomeInstructorSubsection } from './BecomeInstructorSubsection';
import { InstructorSubsection } from './InstructorSubsection';
import { CompaniesSubsection } from './CompaniesSubsection';
import { useStyles } from './styles';

export const LastSection = () => {
	const {styles} = useStyles();
	return (
		<Flex vertical  align="center" justify="space-evenly" className={styles.wrapper}>
			<BecomeInstructorSubsection/>
			<InstructorSubsection/>
			<CompaniesSubsection/>
		</Flex>
	)
}