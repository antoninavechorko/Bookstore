import { BaseActionsWithPayload } from '../../types/types';
import { LogInUser, logInTypes } from './LogInActions';
import { clearLocalStorage } from './helpers';

type authorizeUserType = {
    isLoggedIn: boolean;
    userInfo: LogInUser | null;
};

const defaultState: authorizeUserType = {
    isLoggedIn: false,
    userInfo: null
};

export const logInReducer = (state = defaultState, action: BaseActionsWithPayload<logInTypes, LogInUser | null>) => {
    switch (action.type) {
        case logInTypes.LOG_IN:
            return { ...state, userInfo: action.payload, isLoggedIn: true };

        case logInTypes.LOG_OUT:
            clearLocalStorage();
            return { ...state, userInfo: null, isLoggedIn: false };

        default:
            return state;
    }
};