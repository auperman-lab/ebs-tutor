import { Flex } from 'antd';
import { useStyles } from './styles';

type TutorPageSiderProps = {
	bio?: string
}

export const TutorPageSider = ({bio}: TutorPageSiderProps) =>{
	const {styles} = useStyles();
	return (
		<Flex gap={24} vertical className={styles.wrapper} align='start'>
			<div className={styles.title}>ABOUT ME</div>
			<div className={styles.text}>{bio}</div>
		</Flex>
	)
}