import { Collapse, Flex, List, Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { api } from '@clientApi';
import { useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { useStyles } from './styles';
import { Play, File, PlayCircle, Clock, FolderNotchOpen } from '@clientAssets';
import { useTheme } from 'antd-style';

const { Panel } = Collapse;

export const Curriculum = () => {
	const { id } = useParams();
	const { styles } = useStyles();
	const palette = useTheme();


	const { data: course, isLoading } = useQuery({
		queryKey: ['course', id],
		queryFn: () => api.courses.getCourse(id!),
	});

	const getLessonDuration = (lesson: any): number => {
		if (lesson.duration) return lesson.duration;

		return lesson.topics?.reduce((sum: number, topic: any) => {
			const duration = parseInt(topic.duration);
			return sum + (isNaN(duration) ? 0 : duration);
		}, 0) || 0;
	};

	if (isLoading) return <Spin indicator={<LoadingOutlined spin />} size="large" />;
	if (!course?.lessons?.length) return <div>No curriculum available.</div>;

	const totalSections = course.lessons.length;
	const totalLectures = course.lessons.reduce((count: number, lesson: any) => count + (lesson.topics?.length || 0), 0);
	const totalDuration = course.lessons.reduce((sum: number, lesson: any) => sum + getLessonDuration(lesson), 0);


	return (
		<Flex vertical gap={20}>
			<Flex justify="space-between" align="center">
				<div className={styles.curriculumTitle}>Curriculum</div>
				<Flex gap={24} align="center" className={styles.curriculumStats}>
					<Flex gap={8} align="center">
						<FolderNotchOpen />
						{totalSections} Sections
					</Flex>
					<Flex gap={8} align="center">
						<PlayCircle />
						{totalLectures} Lectures
					</Flex>
					<Flex gap={8} align="center">
						<Clock  stroke={palette.common.black}/>
						{Math.floor(totalDuration / 60)}h {totalDuration % 60}m
					</Flex>
				</Flex>
			</Flex>
			<Collapse accordion>
				{course.lessons.map((lesson) => {
					const topics = lesson.topics || [];
					return (
						<Panel
							key={lesson.id}
							header={
								<Flex justify="space-between" align="center">
									<div>{lesson.title}</div>
									<Flex gap={16}>
										<Flex gap={8}>
											<PlayCircle/>
											{topics.length} lectures
										</Flex>
										<Flex gap={8}>
											<Clock  stroke={palette.common.black}/>
											{getLessonDuration(lesson)}m
										</Flex>
									</Flex>
								</Flex>
							}
						>
							<List
								dataSource={topics}
								renderItem={(topic) => (
									<List.Item className={styles.topicItem}>
										<Flex justify="space-between" align="center" style={{ width: '100%' }}>
											<Flex gap={12} align="center" justify={"center"}>
												{topic.duration ? <Play/> : <File/>}
												{topic.title}
											</Flex>
											<span>{topic.duration ? `${topic.duration} min` : '0 min'}</span>
										</Flex>
									</List.Item>
								)}
							/>
						</Panel>
					);
				})}
			</Collapse>
		</Flex>
	);
};
