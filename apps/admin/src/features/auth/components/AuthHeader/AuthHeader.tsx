import { Button, Flex, Space } from 'antd';
import logo from '../../../../assets/auth/logo.png';
import Title from 'antd/lib/typography/Title';
import { Header } from 'antd/lib/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import "./AuthHeader.scss"

export const AuthHeader = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';
  const handleRedirect = () => {
    navigate(isLogin ? '/register' : '/login');
  };

  return(
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
  )


};
