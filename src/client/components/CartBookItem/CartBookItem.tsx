import React from 'react';
import {
    ArticleContainer,
    Price,
    StyledImg,
    StyledInfo,
    StyledItem,
    StyledTitle,
    Image,
    PriceContainer,
    PriceDiv,
    StyledCartBookInfo,
    CartBookContainer,
    AmountContainer
} from './styles';
import { IBook } from '../../../types/types';
import { Add, Close, Remove } from '@mui/icons-material';
import { useActions } from '../../../store/hooks/useActions';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../../store/AllBooks/AllBooksSelector';
import { NavLink } from 'react-router-dom';

const CartBookItem = (book: IBook) => {
    const { removeBookFromCart, plusAmountToCart, minusAmountToCart, getSelectedBookAsync } = useActions();
    const cartbookArr = useSelector(allBooksSelectors.getCartBooksSelector);
    const cartBook = cartbookArr.find((item: IBook) => item.isbn13 === book?.isbn13);

    const removeBook = () => {
        removeBookFromCart(book.isbn13);
    };
    const plusAmount = () => {
        plusAmountToCart(book.isbn13);
    };

    const minusAmount = () => {
        if (cartBook!.amount === 1) {
            removeBookFromCart(book.isbn13);
        } else {
            minusAmountToCart(book.isbn13);
        }
    };

    const getSelectedBook = () => {
        getSelectedBookAsync(book.isbn13);
    };

    return (

        <StyledItem onClick={getSelectedBook}>

            <CartBookContainer>
                <StyledImg>
                    <Image src={book.image} />
                </StyledImg>
                <StyledCartBookInfo>
                    <NavLink to={`/book/${book.isbn13}`}>
                        <StyledTitle>{book.title}</StyledTitle>
                    </NavLink>
                    <StyledInfo>
                        <ArticleContainer>
                            <div>Art.</div>
                            <div>{book.isbn13}</div>
                        </ArticleContainer>
                        <PriceContainer>
                            <PriceDiv>Price</PriceDiv>
                            <Price>{book.price}</Price>
                        </PriceContainer>
                        <AmountContainer>
                            <IconButton onClick={minusAmount}>
                                <Remove />
                            </IconButton>
                            <div>{cartBook!.amount}</div>
                            <IconButton onClick={plusAmount}>
                                <Add />
                            </IconButton>
                        </AmountContainer>
                    </StyledInfo>
                </StyledCartBookInfo>
            </CartBookContainer>

            <Close color="action" onClick={removeBook} />

        </StyledItem>



    );
};

export default CartBookItem;