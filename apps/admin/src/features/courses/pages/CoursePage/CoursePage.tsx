import { Col, Row } from "antd";
import { CourseDescription, CourseBreadCrumbs } from "@features/courses/components";
import { useStyles } from './styles';



export const CoursePage = () => {
  const { styles } = useStyles();

  //todo: add course ratings card, revenue, overview and stat cards(actual info is provided by the endpoint)

  return (
    <Row gutter={[24, 24]} className={styles.container}>
      <Col span={24}>
        <CourseBreadCrumbs/>
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
