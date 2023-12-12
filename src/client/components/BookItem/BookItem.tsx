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
    PriceDiv
} from './styles';
import { IBook } from '../../../types/types';
import { useActions } from '../../../store/hooks/useActions';
import { NavLink } from 'react-router-dom';

const BookItem = (book: IBook) => {
    const { getSelectedBookAsync } = useActions();

    const getSelectedBook = () => {
        getSelectedBookAsync(book.isbn13);
    };

    return (
        <StyledItem onClick={() => getSelectedBook()}>
            <NavLink to={`/book/${book.isbn13}`}>
                <StyledImg>
                    <Image src={book.image} />
                </StyledImg>
                <StyledTitle>{book.title}</StyledTitle>
                <StyledInfo>
                    <ArticleContainer>
                        <div>Art.</div>
                        <div>{book.isbn13}</div>
                    </ArticleContainer>
                    <PriceContainer>
                        <PriceDiv>Price</PriceDiv>
                        <Price>{book.price}</Price>
                    </PriceContainer>
                </StyledInfo>
            </NavLink>
        </StyledItem>
    );
};

export default BookItem;