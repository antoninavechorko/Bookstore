import { Dispatch } from 'redux';
import { UserApi } from '../../client/api/userApi';

const changePassword = async (newPassword: string, password: string, token: string): Promise<any> => {
    return await UserApi.changePassword(newPassword, password, token);
};

export const changePasswordAsync = (newPassword: string, password: string, token: string) => {
    return (dispatch: Dispatch) => {
        changePassword(newPassword, password, token).then((data) => console.log(data));
    };
};