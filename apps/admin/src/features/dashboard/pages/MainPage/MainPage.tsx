import { Col, Flex, Row } from "antd";
import { ActivityCard, ProfileCard, ProfileViewsCard, StatCard, RatingCard, RevenueCard, OverviewCard  } from "@features/dashboard/components";
import { ChartBar, ChatCircleDots, CreditCard, Gear } from "@phosphor-icons/react";
import { useStyles } from "./styles";


const stats = [
  { title: "Users", quantity: 1200, icon: <ChartBar />, color: "#00FF00" },
  { title: "Users", quantity: 1200, icon: <Gear />, color: "#FF0000" },
  { title: "Users", quantity: 1200, icon: <CreditCard />, color: "#0000FF" },
  { title: "Users", quantity: 1200, icon: <ChatCircleDots />, color: "#00FF00" },
];

export const MainPage = () => {

  const { styles } = useStyles();

  return (
    <Flex className={styles.container} vertical align="center" justify="center">
      <Row gutter={[24, 24]}>
        {stats.map((item, index) => (
          <Col span={6}>
            <StatCard
              key={`${index}-${item.title}`}
              color={item.color}
              title={item.title}
              quantity={item.quantity}
              icon={item.icon}
            />
          </Col>
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
          <RevenueCard />
        </Col>
        <Col span={6}>
          <ProfileViewsCard />
        </Col>
        {/*row3*/}
        <Col span={10}>
          <RatingCard />
        </Col>
        <Col span={14}>
          <OverviewCard />
        </Col>
      </Row>
    </Flex>
  );
};
