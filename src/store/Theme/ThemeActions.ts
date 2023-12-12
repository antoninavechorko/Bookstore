import { ThemeModes } from '../../style/theme';
import { BaseActionsWithPayload } from '../../types/types';

export enum themeActionsType {
    TOGGLE_THEME = 'TOGGLE_THEME'
}

export const toggleThemeAction: (payload: ThemeModes) => BaseActionsWithPayload<themeActionsType, ThemeModes> = (
    payload
) => {
    return {
        type: themeActionsType.TOGGLE_THEME,
        payload
    };
};