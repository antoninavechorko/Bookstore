import {applyMiddleware, combineReducers, createStore} from 'redux';
import { allBooksReducer } from './AllBooks/AllBooksReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { secectedBookReducer } from './Book/BookReducer';
import { themeReducer } from './Theme/ThemeReducer';
import { searchReducer } from './Search/SearchReducer';
import { userInfoReducer } from './SignUpData/SignUpReducer';
import { logInReducer } from './LogIn/LogInReducer';
import { burgerReducer } from './Burger/BurgerReducer';
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    allBooks: allBooksReducer,
    selectedBook: secectedBookReducer,
    theme: themeReducer,
    searchValue: searchReducer,
    signUpData: userInfoReducer,
    userInfo: logInReducer,
    isBurgerOpened: burgerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;