import { Layout, Row} from 'antd';
import { StatCard } from "../../components";
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
      </Row>
    </Content>
  );
};
