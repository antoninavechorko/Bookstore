import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';

const PrivateRoute: FC<any> = ({ children }) => {
    const isLoginUser = useTypedSelector((state) => state.userInfo.isLoggedIn);
    return isLoginUser ? children : <Navigate to="/sign_in" />;
};

export default PrivateRoute;