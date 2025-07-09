import { Col, Row } from 'antd';
import { CourseHeader } from '@clientFeatures/course';

export const CoursePage = () => {
	return (
	<Row gutter={[24, 24]}>
		<Col span={16}>
			<CourseHeader/>
		</Col>
	</Row>
	);
};
