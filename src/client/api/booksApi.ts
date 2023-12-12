import { client } from '../utils/http';

export const BooksApi = {
    getAllBooks: () => client.get('/1.0/new'),

    getSearchBooks: (search: string, page: number) => client.get(`/1.0/search/${search}/${page}`)
};
