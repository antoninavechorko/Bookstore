export interface IBook {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
    authors?: string;
    publisher?: string;
    isbn10?: string;
    pages?: string;
    year?: string;
    rating?: string;
    desc?: string;
    error?: string;
    isFavourite?: boolean;
    amount?: number;
}

export type BaseActions<T> = {
    type: T;
};

export type BaseActionsWithPayload<T, P> = {
    type: T;
    payload: P;
};

export interface ISignUpUserData {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface ILogInUserData {
    email: string;
    password: string;
}

export interface IAccountData {
    name: string;
    email: string;
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}