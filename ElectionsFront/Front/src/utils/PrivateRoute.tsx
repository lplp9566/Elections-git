import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Navigate } from 'react-router-dom';

interface IPrivateRoute {
    component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const {user} = useSelector((state: RootState) => state.user);
    if (!user) {
        return <Navigate to="/login" />;
    }
    return <>{user && component }
  
    </>;
};

export default PrivateRoute;
