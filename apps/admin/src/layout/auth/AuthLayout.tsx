import { Outlet } from 'react-router-dom';
import './authStyle.scss';

export const AuthLayout = () => {
  return (
    <div>
      <div className="header">Yomayo</div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
