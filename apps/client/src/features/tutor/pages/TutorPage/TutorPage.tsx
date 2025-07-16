import { Col, Row } from 'antd';
import { TutorPageHeader, TutorPageSider } from '@client/features/tutor';

export const TutorPage = () => {
	return (
		<Row gutter={[24, 24]}>
			<Col span={24}>
				<TutorPageHeader />
			</Col>
			<Col span={8}>
				<TutorPageSider />
			</Col>
			<Col span={16}>
				{/*	courses*/}
			</Col>

		</Row>
	);
};