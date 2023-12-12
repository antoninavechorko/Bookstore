import { RootState } from '..';

const namespace = 'searchValue';

export const SelectedBookSelectors = {
    getSearchValue: (state: RootState) => state[namespace].value
};