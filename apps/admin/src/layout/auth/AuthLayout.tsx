import { Outlet } from 'react-router-dom';
import { AuthHeader } from '../../features/auth/components';
import { Layout } from 'antd';
import "./AuthLayout.scss"
import { AuthHeader } from '../../features/auth/components';

export const AuthLayout = () => {
  const {  Content } = Layout;
  return (

    <Layout>
      <AuthHeader/>
      <Content>
        <Outlet />
      </Content>
    </Layout>


  );
};
