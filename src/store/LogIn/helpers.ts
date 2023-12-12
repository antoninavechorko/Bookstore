import { Dispatch } from 'redux';
import { ILogInUserData } from '../../types/types';
import { UserApi } from '../../client/api/userApi';
import { logInActions } from './LogInActions';

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const handleLogin = async (userData: ILogInUserData) => {
    const { email, password } = userData;
    const response = await UserApi.loginUser({ email, password });
    return response.data;
};

export const retrievMe = async (token: string) => {
    const res = await UserApi.fetchUserInfo(token);
    return res.data;
};

export const isTokenValid = async (token: string) => {
    try {
        const res = await UserApi.verifyToken(token);

        return res.status === 200;
    } catch (e) {
        return false;
    }
};

export const refreshTokenRequest = async (refreshToken: string) => {
    const res = await UserApi.refreshToken(refreshToken);

    return res.data;
};

export const getUserInfo = async (accessToken: string, dispatch: Dispatch) => {
    const UserInfo = await retrievMe(accessToken);
    if (UserInfo.id) {
        dispatch(logInActions.logInUser(UserInfo));
    }
};

export const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');

    if (refreshToken) {
        const parsedRefreshToken = JSON.parse(refreshToken);
        const { access: newAccessToken } = await refreshTokenRequest(parsedRefreshToken);

        if (newAccessToken) {
            localStorage.setItem('access_token', JSON.stringify(newAccessToken));

            return newAccessToken;
        }
    }
};