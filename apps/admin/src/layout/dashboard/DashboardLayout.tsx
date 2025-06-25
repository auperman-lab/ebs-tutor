import { Layout } from 'antd';
import { DashboardFooter, DashboardHeader, DashboardSider } from '@components';
import { Outlet } from 'react-router-dom';
import { useStyles } from './styles';

const { Content } = Layout;

export const DashboardLayout = () => {
  const { styles } = useStyles();

  return (
    <Layout className={styles.layout}>
      <DashboardSider />
      <Layout>
        <DashboardHeader />
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <DashboardFooter />
      </Layout>
    </Layout>
  );
};
