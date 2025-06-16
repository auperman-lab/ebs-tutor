import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { sally_register } from '@assets';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  return (
    <div className="registerContainer">
      <div className="salyPhoto">
        <img src={sally_register} />
      </div>
      <RegistrationForm />
    </div>
  );
};
