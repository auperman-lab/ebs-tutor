import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div>
      Yomayo
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
