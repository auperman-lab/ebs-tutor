import { Outlet } from 'react-router-dom';
import { AuthHeader } from '../../features/auth/components';

export const AuthLayout = () => {
  return (
    <div>
      <AuthHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
