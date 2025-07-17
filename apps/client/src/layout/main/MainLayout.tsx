import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MainHeader, Footer } from '@clientComponents';
import { useStyles } from './styles';

const { Content } = Layout;

export const MainLayout = () => {
  const { styles } = useStyles();

  return (
    <Layout className={styles.layout}>
      <MainHeader />
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
