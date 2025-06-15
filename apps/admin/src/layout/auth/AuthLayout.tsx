import { Outlet } from 'react-router-dom';
import {  Layout } from 'antd';
import "./AuthLayout.scss"
import { AuthHeader } from '../../features/auth/components';

export const AuthLayout = () => {
  const {  Content } = Layout;
  return (
    <Layout className="auth-layout">
      <AuthHeader/>
      <Content>
        <Outlet />
      </Content>
    </Layout>);
};
