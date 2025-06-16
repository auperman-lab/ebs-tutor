import { Button, Divider } from 'antd';
import { google_logo, facebook_logo, apple_logo } from '@assets';
import './LoginOptions.scss';
import { LoginOptionsProps } from './LoginOptionsTypes';
import React from 'react';

export const LoginOptions: React.FC<LoginOptionsProps> = ({ dividerText }) => {
  return (
    <div>
      <Divider>{dividerText}</Divider>
      <div className="login_options">
        <Button type="default" size="large" className="auth_button">
          <div className="logo_container">
            <img src={google_logo} alt="Google logo" className="logo" />
          </div>
          <span>Google</span>
        </Button>

        <Button type="default" size="large" className="auth_button">
          <div className="logo_container">
            <img src={facebook_logo} alt="Facebook logo" className="logo" />
          </div>
          <span>Facebook</span>
        </Button>

        <Button type="default" size="large" className="auth_button">
          <div className="logo_container">
            <img src={apple_logo} alt="Apple logo" className="logo" />
          </div>
          <span>Apple</span>
        </Button>
      </div>
    </div>
  );
};
