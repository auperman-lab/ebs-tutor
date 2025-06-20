import { Col, Layout, Row } from "antd";
import { Flex } from "antd";
import { CoursePath, CourseDescription } from "../../components/Course";
import { RevenueCard } from "../../components";

export const CoursePage = () => {
  const { Content } = Layout;
  return (
    <Content>
      <Flex
        vertical={true}
        className="main"
        justify="center"
        align="center"
        gap={24}
      >
        <CoursePath />
        <CourseDescription />
        <Row gutter={[24, 24]} style={{ width: "80%" }}>
          <Col span={9}>
            <RevenueCard />
          </Col>
          <Col span={15}>
            <RevenueCard />
          </Col>
        </Row>
      </Flex>
    </Content>
  );
};
