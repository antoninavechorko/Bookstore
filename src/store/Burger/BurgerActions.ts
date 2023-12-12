import { BaseActions } from '../../types/types';

export enum burgerActionsType {
    OPEN_BURGER = 'OPEN_BURGER',
    CLOSE_BURGER = 'CLOSE_BURGER'
}

interface ICounterAction {
    openBurger: () => BaseActions<burgerActionsType>;

    closeBurger: () => BaseActions<burgerActionsType>;
}

export const burgerActions: ICounterAction = {
    openBurger: () => {
        return { type: burgerActionsType.OPEN_BURGER };
    },
    closeBurger: () => {
        return { type: burgerActionsType.CLOSE_BURGER };
    }
};