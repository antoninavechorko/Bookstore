import { BaseActionsWithPayload, IBook } from '../../types/types';
import { AllBooksTypes } from './AllBooksActions';

type defaultStateType = {
    allBooks: IBook[];
    cartBooks: IBook[];
    favoriteBooks: IBook[];
    searchBook: {
        error: string;
        total: string;
        page: string;
        books: IBook[];
    };
};

const defaultState: defaultStateType = {
    allBooks: [],
    cartBooks: [],
    favoriteBooks: [],
    searchBook: {
        error: '',
        total: '',
        page: '',
        books: []
    }
};

export const allBooksReducer = (
    state = defaultState,
    action: BaseActionsWithPayload<AllBooksTypes, any[] | any | string>
) => {
    switch (action.type) {
        case AllBooksTypes.SET_BOOKS:
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    allBooks: [ ...action.payload.map((book) => ({ ...book, isFavourite: false })) ]
                };
            }
            return state;

        case AllBooksTypes.SET_SEARCH_BOOKS:
            return {
                ...state,
                searchBook: {
                    ...action.payload
                }
            };

        case AllBooksTypes.ADD_TO_FAVOURITE:
            return {
                ...state,

                allBooks: state.allBooks.map(
                    (book) => (action.payload === book ? { ...book, isFavourite: true } : book)
                ),
                favoriteBooks: [ ...state.favoriteBooks, { ...action.payload as IBook, isFavorite: true } ]
            };
        case AllBooksTypes.DELETE_FROM_FAVOURITE:
            return {
                ...state,

                allBooks: state.allBooks.map(
                    (book) => (action.payload === book ? { ...book, isFavourite: false } : book)
                ),

                favoriteBooks: state.favoriteBooks.filter((book) => book.isbn13 !== action.payload)
            };

        case AllBooksTypes.ADD_BOOK_TO_CART:
            return {
                ...state,

                allBooks: state.allBooks.map((book) => (action.payload === book ? { ...book, amount: 1 } : book)),
                cartBooks: [ ...state.cartBooks, { ...action.payload as IBook, amount: 1 } ]
            };
        case AllBooksTypes.REMOVE_BOOK_FROM_CART:
            const cartArr = state.cartBooks.filter((book) => book.isbn13 !== action.payload);
            return {
                ...state,
                cartBooks: [ ...cartArr ]
            };
        case AllBooksTypes.CLEAR_CART:
            return {
                ...state,
                cartBooks: []
            };
        case AllBooksTypes.PLUS_AMOUNT_TO_CART:
            return {
                ...state,
                cartBooks: state.cartBooks.map(
                    (book) => (action.payload === book.isbn13 ? { ...book, amount: book.amount! + 1 } : { ...book })
                ) as IBook[]
            };
        case AllBooksTypes.MINUS_AMOUNT_TO_CART:
            return {
                ...state,
                cartBooks: state.cartBooks.map(
                    (book) => (action.payload === book.isbn13 ? { ...book, amount: book.amount! - 1 } : { ...book })
                ) as IBook[]
            };
        default:
            return state;
    }
};