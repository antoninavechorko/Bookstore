import { BaseActionsWithPayload } from '../../types/types';
import { burgerActionsType } from './BurgerActions';

const defaultState = {
    isBurgerOpened: false
};

export const burgerReducer = (state = defaultState, action: BaseActionsWithPayload<burgerActionsType, boolean>) => {
    switch (action.type) {
        case burgerActionsType.OPEN_BURGER:
            return { ...state, isBurgerOpened: true };
        case burgerActionsType.CLOSE_BURGER:
            return { ...state, isBurgerOpened: false };

        default:
            return state;
    }
};