import { RootState } from '..';

const namespace = 'selectedBook';

export const SelectedBookSelectors = {
    getSelectedBook: (state: RootState) => state[namespace].selectedBook
};