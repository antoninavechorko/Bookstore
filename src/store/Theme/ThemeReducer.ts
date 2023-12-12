import { ThemeModes } from '../../style/theme';
import { BaseActionsWithPayload } from '../../types/types';
import { themeActionsType } from './ThemeActions';

const defaultState = {
    themeMode: ThemeModes.LIGHT
};

export const themeReducer = (state = defaultState, action: BaseActionsWithPayload<themeActionsType, ThemeModes>) => {
    switch (action.type) {
        case themeActionsType.TOGGLE_THEME:
            return { ...state, themeMode: action.payload };

        default:
            return state;
    }
};