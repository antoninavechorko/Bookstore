import { RootState } from '..';

const namespace = 'allBooks';

export const allBooksSelectors = {
    getAllBooksSelector: (state: RootState) => state[namespace].allBooks,
    getSearchBooksSelector: (state: RootState) => state[namespace].searchBook,
    getAllFavoriteSelector: (state: RootState) => state[namespace].favoriteBooks,
    getCartBooksSelector: (state: RootState) => state[namespace].cartBooks
};