import { BaseActionsWithPayload } from '../../types/types';

export enum SearchTypes {
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
}

export interface ISearchAction {
    setSearchValue: (value: string | null) => BaseActionsWithPayload<SearchTypes, string | null>;
}

export const searchAction: ISearchAction = {
    setSearchValue: (value) => {
        return { type: SearchTypes.SET_SEARCH_VALUE, payload: value };
    }
};