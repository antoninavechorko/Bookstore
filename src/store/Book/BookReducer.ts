import { BaseActionsWithPayload, IBook } from '../../types/types';
import { SelectedBookTypes } from './BookActions';

type secectedBookType = {
    selectedBook: null | IBook;
};

const defaultState: secectedBookType = {
    selectedBook: null
};

export const secectedBookReducer = (state = defaultState, action: BaseActionsWithPayload<SelectedBookTypes, IBook>) => {
    switch (action.type) {
        case SelectedBookTypes.SET_SELECTED_BOOK:
            return { ...state, selectedBook: action.payload };
        case SelectedBookTypes.CLEAR_SELECTED_BOOK:
            return { ...state, selectedBook: null };

        default:
            return state;
    }
};