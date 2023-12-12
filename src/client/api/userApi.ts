import { ILogInUserData, ISignUpUserData } from '../../types/types';
import { user } from '../utils/http';

export const UserApi = {
    signUpUser: (userData: ISignUpUserData) => user.post('/auth/users/', userData),
    activateUserAccount: (uid: string, token: string) =>
        user.post('/auth/users/activation/', { uid: uid, token: token }),
    loginUser: ({ email, password }: ILogInUserData) => user.post('/auth/jwt/create/', { email, password }),
    changePassword: (newPassword: string, password: string, token: string) =>
        user.post(
            '/auth/users/set_password/',
            {
                new_password: newPassword,
                current_password: password
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ),
    resetPassword: (email: string) =>
        user.post('/auth/users/reset_password/', {
            email
        }),
    resetPasswordConfirm: (uid: string, token: string, newPassword: string) =>
        user.post('/auth/users/reset_password_confirm/', { uid: uid, token: token, new_password: newPassword }),
    fetchUserInfo: (token: string) =>
        user.get('/auth/users/me/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
    verifyToken: (token: string) => user.post('/auth/jwt/verify/', { token }),
    refreshToken: (token: string) => user.post('/auth/jwt/refresh/', { refresh: token })
};