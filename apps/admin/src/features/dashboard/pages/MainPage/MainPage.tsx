import { Col, Flex, Layout, Row } from "antd";
import { ActivityCard, ProfileCard, ProfileViewsCard, StatCard } from "../../components";
//@ts-ignore
import { ChartBar, ChatCircleDots, CreditCard, Gear } from "@phosphor-icons/react";
import { RatingCard } from "../../components/RatingCard";
import { RevenueCard } from "../../components/RevenueCard";
import { OverviewCard } from "../../components/OverviewCard";




export const MainPage = () => {
  const { Content } = Layout;

  const stats = [
    { title: "Users", quantity: 1200, icon: <ChartBar />, color: "#00FF00" },
    { title: "Users", quantity: 1200, icon: <Gear />, color: "#FF0000" },
    { title: "Users", quantity: 1200, icon: <CreditCard />, color: "#0000FF" },
    { title: "Users", quantity: 1200, icon: <ChatCircleDots />, color: "#00FF00" },
  ];

  return (
    <Content>
      <Flex  style={{  paddingTop: "24px" }} vertical={true} align="center" justify="center">
        <Row  style={{ width: "85%"}}  gutter={[24, 24]}>
          {stats.map((item, index) => (
            <StatCard key={`${index}-${item.title}`} color={item.color} title={item.title} quantity={item.quantity}
                      icon={item.icon} />
          ))}
          {/*row1*/}
          <Col span={24}>
            <ProfileCard />
          </Col>
          {/*row2*/}
          <Col span={8}>
            <ActivityCard />
          </Col>

          <Col span={10}>
            <RevenueCard/>
          </Col>
          <Col span={6}>
            <ProfileViewsCard/>
          </Col>
          {/*row3*/}
          <Col span={10}>
            <RatingCard />
          </Col>
          <Col span={14}>
            <OverviewCard/>
          </Col>
        </Row>
      </Flex>
    </Content>
  );
};
