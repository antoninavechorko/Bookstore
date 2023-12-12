import { Dispatch } from 'redux';
import { UserApi } from '../../client/api/userApi';

const resetPassword = async (email: string): Promise<any> => {
    return await UserApi.resetPassword(email);
};

export const resetPasswordAsync = (email: string) => {
    return (dispatch: Dispatch) => {
        resetPassword(email).then((data) => console.log(data));
    };
};

const resetPasswordConfirm = async (uid: string, token: string, newPassword: string): Promise<any> => {
    return await UserApi.resetPasswordConfirm(uid, token, newPassword);
};

export const resetPasswordConfirmAsync = (uid: string, token: string, newPassword: string) => {
    return (dispatch: Dispatch) => {
        resetPasswordConfirm(uid, token, newPassword).then((data) => console.log(data));
    };
};