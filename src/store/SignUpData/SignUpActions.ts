import { BaseActions, BaseActionsWithPayload, ISignUpUserData } from '../../types/types';

export enum SignUpTypes {
    GET_SIGN_UP_DATA = 'GET_SIGN_UP_DATA',
    CLEAR_SIGN_UP_DATA = 'CLEAR_SIGN_UP_DATA'
}

interface ISignUpActions {
    getSignUpData: (userData: ISignUpUserData | null) => BaseActionsWithPayload<SignUpTypes, ISignUpUserData | null>;
    clearSignUpData: () => BaseActions<SignUpTypes>;
}

export const signUpActions: ISignUpActions = {
    getSignUpData: (userData: ISignUpUserData | null) => {
        return { type: SignUpTypes.GET_SIGN_UP_DATA, payload: userData };
    },
    clearSignUpData: () => {
        return { type: SignUpTypes.CLEAR_SIGN_UP_DATA };
    }
};