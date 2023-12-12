import { Dispatch } from 'redux';
import { ILogInUserData } from '../../types/types';
import { getUserInfo, handleLogin } from '../LogIn/helpers';

export const getLogInUserAsync = (userData: ILogInUserData) => {
    try {
        return async (dispatch: Dispatch) => {
            const tokens = await handleLogin(userData);

            if (tokens.access && tokens.refresh) {
                localStorage.setItem('access_token', JSON.stringify(tokens.access));
                localStorage.setItem('refresh_token', JSON.stringify(tokens.refresh));
            }

            await getUserInfo(tokens.access, dispatch);
        };
    } catch (e) {
        console.log(e);
    }
};