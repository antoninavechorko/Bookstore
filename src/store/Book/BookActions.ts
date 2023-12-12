import { BaseActions, BaseActionsWithPayload, IBook } from '../../types/types';

export enum SelectedBookTypes {
    SET_SELECTED_BOOK = 'SET_SELECTED_BOOK',
    CLEAR_SELECTED_BOOK = 'CLEAR_SELECTED_BOOK'
}

export interface IBookAction {
    setSelectedBook: (selectedBook: IBook | null) => BaseActionsWithPayload<SelectedBookTypes, IBook | null>;
    clearSelectedBook: () => BaseActions<SelectedBookTypes>;
}

export const selectedBookAction: IBookAction = {
    setSelectedBook: (selectedBook) => {
        return { type: SelectedBookTypes.SET_SELECTED_BOOK, payload: selectedBook };
    },
    clearSelectedBook: () => {
        return { type: SelectedBookTypes.CLEAR_SELECTED_BOOK };
    }
};