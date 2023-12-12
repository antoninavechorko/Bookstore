import React, { useEffect, useState } from 'react';
import {
    BookContainer,
    CartContainer,
    Info,
    InfoName,
    InfoValue,
    StyledButton,
    StyledP,
    ThanksPopUp,
    Title,
    TotalDiv,
    TotalWrapper
} from './styles';
import { IBook } from '../../types/types';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../store/AllBooks/AllBooksSelector';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';

import CartBookItem from '../../client/components/CartBookItem/CartBookItem';
import { useActions } from '../../store/hooks/useActions';

const Cart = () => {
    const [ thanksTab, setThanksTab ] = useState(false);

    const cartArr = useSelector(allBooksSelectors.getCartBooksSelector);
    const { clearCart } = useActions();

    const getTotal = () => {
        return cartArr.reduce(
            (acc: number, book: IBook) => acc + Number(book.price.replace('$', '')) * book.amount!,
            0
        );
    };

    useEffect(
        () => {
            getTotal();
        },
        [ cartArr ]
    );

    const total = getTotal();

    const vat = total * 0.2;
    const totalSum = total + vat;

    const handleBtnClick = () => {
        clearCart();
        setThanksTab((prevState) => {
            return !prevState;
        });
    };

    return (
        <CartContainer>
            {thanksTab && (
                <ThanksPopUp>
                    <StyledP>Thanks for your order</StyledP>
                    <StyledButton onClick={handleBtnClick}>Close</StyledButton>
                </ThanksPopUp>
            )}
            <NavLink to="/">
                <IconButton>
                    <KeyboardBackspace />
                </IconButton>
            </NavLink>
            <Title>Your cart</Title>
            {cartArr.length ? (
                <BookContainer>
                    {cartArr &&
                        cartArr.map((book: IBook) => (
                            <CartBookItem
                                title={book.title}
                                subtitle={book.subtitle}
                                isbn13={book.isbn13}
                                price={book.price}
                                image={book.image}
                                url={book.url}
                                key={book.isbn13 + book.image}
                            />
                        ))}
                    <TotalWrapper>
                        <Info>
                            <InfoName>Sum total</InfoName>
                            <InfoValue>{total.toFixed(2)}</InfoValue>
                        </Info>
                        <Info>
                            <InfoName>VAT</InfoName>
                            <InfoValue>{vat.toFixed(2)}</InfoValue>
                        </Info>
                        <TotalDiv>
                            <div>TOTAL</div>
                            <div>${totalSum.toFixed(2)} </div>
                        </TotalDiv>
                        <StyledButton onClick={handleBtnClick}>Check out</StyledButton>
                    </TotalWrapper>
                </BookContainer>
            ) : (
                <p>Your cart is empy.</p>
            )}
        </CartContainer>
    );
};

export default Cart;