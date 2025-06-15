import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex, Layout, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import logo from "../../assets/auth/logo.png"
import "./AuthLayout.scss"

export const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';
  const handleRedirect = () => {
    navigate(isLogin ? '/register' : '/login');
  };
  const { Header, Content } = Layout;
  return (
    <Layout className="auth-layout">
      <Header className="header">
        <Flex gap="middle" className="header_components_wrapper">
          <Button
            size="large"
            className={'header_logo'}
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={logo} alt={'logo'} />
            <Title level={3} className="header_title">
              E-tutor
            </Title>
          </Button>

          <Space size={'middle'} className="create_account_wrapper">
            <p className="create_account_text">
              {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
            </p>
            <Button
              size="large" className="create_account_button"
              onClick={handleRedirect}> {isLogin ? 'Create account' : 'Sign in'}
            </Button>
          </Space>
        </Flex>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>);
};
