import { Col, Row } from 'antd';
import { CourseHeader, Sidebar } from '@clientFeatures/course';

export const CoursePage = () => {
	return (
	<Row gutter={[24, 24]}>
		<Col span={16}>
			<CourseHeader/>
		</Col>
		<Col span={8}>
			<Sidebar/>
		</Col>
	</Row>
	);
};
