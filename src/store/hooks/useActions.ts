import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedBookAction } from '../Book/BookActions';
import { allBooksActions } from '../AllBooks/AllBooksActions';
import { getAllBooks } from '../AsyncFn/getAllBooksAsync';
import { getSelectedBookAsync } from '../AsyncFn/getBookByIdAsync';
import { toggleThemeAction } from '../Theme/ThemeActions';
import { searchAction } from '../Search/SearchActions';
import { getSearchBooksAsync } from '../AsyncFn/getSearchBookAsync';
import { signUpActions } from '../SignUpData/SignUpActions';
import { getLogInUserAsync } from '../AsyncFn/getLogInUserAsync';
import { getNewTokensAsync } from '../AsyncFn/getNewTokensAsync';
import { burgerActions } from '../Burger/BurgerActions';
import { changePasswordAsync } from '../AsyncFn/changePassword';
import { resetPasswordAsync, resetPasswordConfirmAsync } from '../AsyncFn/resetPassword';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        {
            ...selectedBookAction,
            ...allBooksActions,
            ...searchAction,
            ...signUpActions,
            ...burgerActions,
            ...toggleThemeAction,
            getAllBooks,
            getSelectedBookAsync,
            getSearchBooksAsync,
            getLogInUserAsync,
            getNewTokensAsync,
            changePasswordAsync,
            resetPasswordAsync,
            resetPasswordConfirmAsync
        },
        dispatch
    );
};