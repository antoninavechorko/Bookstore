import { BaseActions, BaseActionsWithPayload, IBook } from '../../types/types';

export enum AllBooksTypes {
    SET_BOOKS = 'SET_BOOKS',
    SET_SEARCH_BOOKS = 'SET_SEARCH_BOOKS',
    ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE',
    DELETE_FROM_FAVOURITE = 'DELETE_FROM_FAVOURITE',
    ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART',
    REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
    PLUS_AMOUNT_TO_CART = 'PLUS_AMOUNT_TO_CART',
    MINUS_AMOUNT_TO_CART = 'MINUS_AMOUNT_TO_CART'
}

interface IBooksAction {
    setBooks: (books: IBook[]) => BaseActionsWithPayload<AllBooksTypes, IBook[]>;
    setSearchBooks: (books: IBook[]) => BaseActionsWithPayload<AllBooksTypes, IBook[]>;
    addToFavourite: (book: IBook) => BaseActionsWithPayload<AllBooksTypes, IBook>;
    deleteFromFavourite: (book: string) => BaseActionsWithPayload<AllBooksTypes, string>;
    addBookToCart: (book: IBook) => BaseActionsWithPayload<AllBooksTypes, IBook>;
    removeBookFromCart: (bookId: string) => BaseActionsWithPayload<AllBooksTypes, string>;
    clearCart: () => BaseActions<AllBooksTypes>;
    plusAmountToCart: (bookId: string) => BaseActionsWithPayload<AllBooksTypes, string>;
    minusAmountToCart: (bookId: string) => BaseActionsWithPayload<AllBooksTypes, string>;
}

export const allBooksActions: IBooksAction = {
    setBooks: (books: IBook[]) => {
        return { type: AllBooksTypes.SET_BOOKS, payload: books };
    },
    setSearchBooks: (books: IBook[]) => {
        return { type: AllBooksTypes.SET_SEARCH_BOOKS, payload: books };
    },
    addToFavourite: (book: IBook) => {
        return { type: AllBooksTypes.ADD_TO_FAVOURITE, payload: book };
    },
    deleteFromFavourite: (bookId: string) => {
        return { type: AllBooksTypes.DELETE_FROM_FAVOURITE, payload: bookId };
    },
    addBookToCart: (book: IBook) => {
        return { type: AllBooksTypes.ADD_BOOK_TO_CART, payload: book };
    },
    removeBookFromCart: (bookId: string) => {
        return { type: AllBooksTypes.REMOVE_BOOK_FROM_CART, payload: bookId };
    },
    clearCart: () => {
        return { type: AllBooksTypes.CLEAR_CART };
    },
    plusAmountToCart: (bookId: string) => {
        return { type: AllBooksTypes.PLUS_AMOUNT_TO_CART, payload: bookId };
    },
    minusAmountToCart: (bookId: string) => {
        return { type: AllBooksTypes.MINUS_AMOUNT_TO_CART, payload: bookId };
    }
};