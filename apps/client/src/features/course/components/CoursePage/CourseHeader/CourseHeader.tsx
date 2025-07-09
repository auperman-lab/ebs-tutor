import { Anchor, Col, Row } from 'antd';
import { useStyles } from './styles';
import { CourseBreadCrumbs } from './CourseBreadCrumbs';
import { CourseDescription } from './CourseDescription';
import { Overview } from '@clientFeatures/course';


const sections = [
	{
		key: 'overview',
		href: `#part-1`,
		title: 'Overview',
	},
	{
		key: 'curriculum',
		href: `#part-2`,
		title: 'Curriculum',
	},
	{
		key: 'instructor',
		href: `#part-3`,
		title: 'Instructor',
	},
	{
		key: 'review',
		href: `#part-4`,
		title: 'Review',
	},
];

export const CourseHeader = () => {
	const { styles } = useStyles();

	return (
		<Row gutter={[24, 24]} className={styles.container}>
			<Col span={24}>
				<CourseBreadCrumbs />
			</Col>
			<Col span={24}>
				<CourseDescription />
			</Col>

			<Col span={24}>
				<Anchor
					direction="horizontal"
					items={sections}
					className={styles.anchorWrapper}
				/>
			</Col>

			<Col span={24}>
				<Overview/>

			</Col>


		</Row>
	);

};
