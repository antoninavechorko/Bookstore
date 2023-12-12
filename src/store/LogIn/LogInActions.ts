import { BaseActions, BaseActionsWithPayload } from '../../types/types';

export enum logInTypes {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT'
}
export type LogInUser = {
    email: string;
    username: string;
    id: string;
};

interface ICounterAction {
    logInUser: (userInfo: LogInUser | null) => BaseActionsWithPayload<logInTypes, LogInUser | null>;
    logOutUser: () => BaseActions<logInTypes>;
}

export const logInActions: ICounterAction = {
    logInUser: (userInfo) => {
        return { type: logInTypes.LOG_IN, payload: userInfo };
    },
    logOutUser: () => {
        return { type: logInTypes.LOG_OUT };
    }
};