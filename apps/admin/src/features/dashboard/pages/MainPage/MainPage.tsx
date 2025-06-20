import { Col, Layout, Row } from "antd";
import { StatCard, ProfileCard, ActivityCard } from "../../components";
//@ts-ignore
import { ChartBar, CreditCard, ChatCircleDots, Gear } from "@phosphor-icons/react";


export const MainPage = () => {
  const { Content } = Layout;

  const stats = [
    { title: 'Users', quantity: 1200, icon: <ChartBar/>, color: "#00FF00" },
    { title: 'Users', quantity: 1200, icon: <Gear/>,  color: "#FF0000" },
    { title: 'Users', quantity: 1200, icon: <CreditCard/>,  color: "#0000FF" },
    { title: 'Users', quantity: 1200, icon: <ChatCircleDots/>,  color: "#00FF00" },
  ];

  return (
    <Content style={{ padding: "0 64px", paddingTop: "24px" }}>
      <Row gutter={[24, 24]}>
        {stats.map((item, index)=>(
          <StatCard key={`${index}-${item.title}`} color={item.color} title={item.title} quantity={item.quantity} icon={item.icon} />
        ))}
        {/*row1*/}
        <ProfileCard/>
        {/*row2*/}
        <ActivityCard/>

        <Col span={10} >
          <div style={{ height:"420px", backgroundColor: "#000000", color: "white", width:"100%" }}>revenue</div>
        </Col>
        <Col span={6} >
          <div style={{ height:"420px", backgroundColor: "#000000", color: "white", width:"100%" }}>profile view</div>
        </Col>
        {/*row3*/}
        <Col span={10} >
          <div style={{ height:"480px", backgroundColor: "#000000", color: "white", width:"100%" }}>rating</div>
        </Col>
        <Col span={14} >
          <div style={{ height:"480px", backgroundColor: "#000000", color: "white", width:"100%" }}>overview</div>
        </Col>
      </Row>

    </Content>
  );
};
