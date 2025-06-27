import { Col, Row, Breadcrumb } from 'antd';
import { Link, useParams } from "react-router-dom";
import { routes } from '@const';
import { CourseDescription } from "@features/courses";
import { useStyles } from './styles';

export const CoursePage = () => {
  const { styles } = useStyles();
  const { title }  = useParams();

  const items = [
    {
      title: <Link to={routes.main}>Dashboard</Link>,
    },
    {
      title: <Link to={routes.courses}>My Courses</Link>,
    },
    {
      title: title,
    },
  ];
  //todo: add course ratings card, revenue, overview and stat cards(actual info is provided by the endpoint)

  return (
    <Row gutter={[24, 24]} className={styles.container}>
      <Col span={24}>
        <Breadcrumb items={items} />
      </Col>
      <Col span={24}>
        <CourseDescription />
      </Col>

      <Col xxl={9} span={24}>

      </Col>

      <Col xxl={15} span={24}>

      </Col>
    </Row>
  );
};
