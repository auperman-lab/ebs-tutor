import { LoginForm, LoginOptions } from '../../components';
import './LoginPage.scss';
import { sally_login } from '@assets';

export const LoginPage = () => {
  return (
    <div>
      <div className="login_page">
        <div className="image_container">
          <img src={sally_login} alt="login img" />
        </div>
        <div className="login_form_container">
          <div className={'login_form_wrapper'}>
            <h1> Sign in to your account</h1>
            <LoginForm />
            <LoginOptions dividerText={'SIGN IN WITH'} />
          </div>
        </div>
      </div>
    </div>
  );
};
