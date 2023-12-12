import { Dispatch } from 'redux';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { BooksApi } from '../../client/api/booksApi';

const getBooks = async (): Promise<any> => {
    try {
        return await BooksApi.getAllBooks();
    } catch (e) {
        console.log(e);
    }
};

export const getAllBooks = () => {
    try {
        return (dispatch: Dispatch) => {
            getBooks().then((data) => dispatch(allBooksActions.setBooks(data.data.books)));
        };
    } catch (e) {
        console.log(e);
    }
};