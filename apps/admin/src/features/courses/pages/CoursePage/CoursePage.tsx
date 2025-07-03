import { Col, Row } from "antd";
import { CourseDescription, CourseBreadCrumbs } from "@features/courses/components";
import { useStyles } from './styles';
import { OverviewCard, RatingCard, RevenueCard } from "@features/dashboard/components";
import { CourseStats } from "@features/courses/components/Course/CourseStats";


export const CoursePage = () => {
  const { styles } = useStyles();

  return (
    <Row gutter={[24, 24]} className={styles.container}>
      <Col span={24}>
        <CourseBreadCrumbs/>
      </Col>
      <Col span={24}>
        <CourseDescription />
      </Col>

      <Row gutter={[24, 24]} style={{ width: "100%" }}>
        <Col span={12}>
          <CourseStats />
        </Col>
        <Col span={12}>
          <RatingCard />
        </Col>
      </Row>

      <Col span={10}>
        <RevenueCard />
      </Col>

      <Col span={14}>
        <OverviewCard />
      </Col>

    </Row>
  );
};
