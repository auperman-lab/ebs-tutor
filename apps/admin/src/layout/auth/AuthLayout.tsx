import { Outlet } from 'react-router-dom';
import './AuthLayout.scss';

export const AuthLayout = () => {
  return (
    <div>
      <div className="header">Yomayo</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
