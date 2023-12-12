import { Dispatch } from 'redux';
import { BooksApi } from '../../client/api/booksApi';
import { allBooksActions } from '../AllBooks/AllBooksActions';

const getSearchBook = async (value: string, page: number): Promise<any> => {
    return await BooksApi.getSearchBooks(value, page);
};

export const getSearchBooksAsync = (value: string, page: number) => {
    try {
        return (dispatch: Dispatch) => {
            getSearchBook(value, page).then((data) => {
                dispatch(allBooksActions.setSearchBooks(data.data));
            });
        };
    } catch (e) {
        console.log(e);
    }
};