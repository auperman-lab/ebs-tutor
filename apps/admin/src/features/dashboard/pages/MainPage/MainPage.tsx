import { Layout, Row} from 'antd';
import { StatCard } from "../../components";

export const MainPage = () => {
  const { Content } = Layout;

  const stats = [
    { name: 'Users', value: 1200 },
    { name: 'Projects', value: 58 },
    { name: 'Revenue', value: '$5.2K' },
    { name: 'Tasks', value: 312 }
  ];

  return (
    <Content style={{ padding: "0 64px", paddingTop: "24px", backgroundColor: "black" }}>
      <Row gutter={[24, 24]}>
        {stats.map((name, index)=>(
          <StatCard key={`${index}-${name}`} />
        ))}
      </Row>
    </Content>
  );
};
