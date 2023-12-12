import React, { useCallback, useEffect, useState } from 'react';

import { SearchOutlined } from '@mui/icons-material';
import { useActions } from '../../../../store/hooks/useActions';
import { StyledIconButton, StyledInput, StyledInputContainer } from './styles';

function debounce(func: any, delay: number) {
    let timeout: any;
    return function() {
        //@ts-ignore
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

const Search = () => {
    const [ value, setValue ] = useState(null);
    const { getAllBooks, getSearchBooksAsync, setSearchValue } = useActions();

    const handleChange = (event: any) => {
        setValue(event.target.value);

        if (!event.target.value) {
            getAllBooks();
            setSearchValue(value);
        }
    };

    const dedouncedOnChange = useCallback(debounce(handleChange, 500), []);

    useEffect(
        () => {
            if (value) {
                getSearchBooksAsync(value, 1);
                setSearchValue(value);
            }
        },
        [ value ]
    );

    return (
        <StyledInputContainer>
            <StyledInput placeholder="Search" type="text" onChange={dedouncedOnChange} />
            <StyledIconButton>
                <SearchOutlined />
            </StyledIconButton>
        </StyledInputContainer>
    );
};

export default Search;