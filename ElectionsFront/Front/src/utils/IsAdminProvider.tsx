import React, { ReactNode } from 'react'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
interface AdminPrivateRoute {
    component: ReactNode;
}
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IsAdminProvider = ({component}:AdminPrivateRoute) => {
    const {user} = useSelector((state: RootState) => state.user);
    const response = axios.post(`${BASE_URL}/api/checkToken`,)
    if(!response){
        return <Navigate to="/" />;
    }
    if (!user?.isAdmin) {
       
    }
  return (
    <div>
    { component}
    </div>
  )
}

export default IsAdminProvider