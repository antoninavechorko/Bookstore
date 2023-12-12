import { BaseActionsWithPayload } from '../../types/types';
import { SearchTypes } from './SearchActions';

type SearchType = {
    value: null | string;
};

const defaultState: SearchType = {
    value: null
};

export const searchReducer = (state = defaultState, action: BaseActionsWithPayload<SearchTypes, string>) => {
    switch (action.type) {
        case SearchTypes.SET_SEARCH_VALUE:
            return { ...state, value: action.payload };

        default:
            return state;
    }
};