import { Flex } from 'antd';
import { useStyles } from './styles';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { useParams } from 'react-router-dom';

export const TutorPageSider = () =>{
	const {styles} = useStyles();
	const { id } = useParams();

	if (!id) return <div>No id provided</div>;

	const { data: tutor, isLoading } = useQuery({
		queryKey: ['tutors'],
		queryFn: () => api.courses.getTutor(id),
	});

	if (isLoading) return <div>Loading</div>

	return (
		<Flex gap={24} vertical className={styles.wrapper} align='start'>
			<div className={styles.title}>ABOUT ME</div>
			<div className={styles.text}>{tutor?.bio}</div>
		</Flex>
	)
}