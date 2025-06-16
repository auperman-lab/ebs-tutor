import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { sally_register } from '@assets';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  return (
    <div className="registerContainer">
      <div className="salyPhoto">
        <img alt={"register_image"} src={sally_register} />
      </div>
      <RegistrationForm />
    </div>
  );
};
