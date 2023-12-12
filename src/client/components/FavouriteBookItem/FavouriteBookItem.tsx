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
    FavoriteBookContainer,
    StyledFavDookInfo
} from './styles';
import { IBook } from '../../../types/types';
import { FavoriteBorder } from '@mui/icons-material';
import { useActions } from '../../../store/hooks/useActions';
import { NavLink } from 'react-router-dom';

const FavoriteBookItem = (book: IBook) => {
    const { deleteFromFavourite, getSelectedBookAsync } = useActions();

    const deleteFavoriteBook = () => {
        deleteFromFavourite(book.isbn13);
    };

    const getSelectedBook = () => {
        getSelectedBookAsync(book.isbn13);
    };

    return (
        <StyledItem onClick={getSelectedBook}>
            <FavoriteBookContainer>
                <StyledImg>
                    <Image src={book.image} />
                </StyledImg>
                <StyledFavDookInfo>
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
                    </StyledInfo>
                </StyledFavDookInfo>
            </FavoriteBookContainer>

            <FavoriteBorder color="error" onClick={deleteFavoriteBook} />
        </StyledItem>
    );
};

export default FavoriteBookItem;