import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MainHeader, Footer } from '@client/components';
import { useStyles } from './styles';

const { Content } = Layout;

export const MainLayout = () => {
  const { styles } = useStyles();

  return (
    <Layout className={styles.layout}>
      <MainHeader />
      <Content >
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
