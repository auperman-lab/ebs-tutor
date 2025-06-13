import { LoginForm } from '../../components';
import { Button, Divider } from 'antd';
import "./LoginPage.scss"
import google_logo from "../../../../assets/auth/google_logo.png"
import facebook_logo from '../../../../assets/auth/facebook_logo.png';
import apple_logo from '../../../../assets/auth/apple_logo.png';
import sally_login from '../../../../assets/auth/sally_login.png';


export const LoginPage = () => {
  return (
    <div>
      <div className="login_page">
        <div className="image_container">
          <img src={sally_login} alt="login img"/>
        </div>
        <div className="login_form_container">
          <div className={"login_form_wrapper"}>
            <h1> Sign in to your account</h1>
            <LoginForm />
            <Divider >SIGN IN WITH</Divider>
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
        </div>
      </div>


    </div>
  )
}
