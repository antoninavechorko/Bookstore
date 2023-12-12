import { Dispatch } from 'redux';
import { getUserInfo, isTokenValid, refreshToken } from '../LogIn/helpers';

export const getNewTokensAsync = () => {
    return async (dispatch: Dispatch) => {
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) return;

        const parsedToken = JSON.parse(accessToken);

        try {
            const isValidToken = await isTokenValid(parsedToken);
            if (isValidToken) {
                await getUserInfo(parsedToken, dispatch);
            } else {
                const newAccessToken = await refreshToken();

                if (newAccessToken) {
                    await getUserInfo(newAccessToken, dispatch);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
};