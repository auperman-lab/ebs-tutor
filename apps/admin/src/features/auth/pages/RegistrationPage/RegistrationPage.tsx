import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import saly from '../../../../assets/auth/Saly-1.png';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  return (
    <div className="registerContainer">
      <div className="salyPhoto">
        <img src={saly} />
      </div>
      <RegistrationForm />
    </div>
  );
};
