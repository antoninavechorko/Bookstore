import { RootState } from '..';

const namespace = 'userInfo';

export const LogInSelectors = {
    isUerLoggedIn: (state: RootState) => state[namespace].isLoggedIn,
    userInfo: (state: RootState) => state[namespace].userInfo
};