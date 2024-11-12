import React, { ReactNode } from 'react'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
interface AdminPrivateRoute {
    component: ReactNode;
}

const IsAdminProvider = ({component}:AdminPrivateRoute) => {
    const {user} = useSelector((state: RootState) => state.user);
    if (!user?.isAdmin) {
        return <Navigate to="/" />;
    }
  return (
    <div>
    { component}
    </div>
  )
}

export default IsAdminProvider