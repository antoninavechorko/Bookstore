import React from 'react';
import { Button } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ThemeWrapper } from './styles';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../../store/hooks/useTypedSelector';
import { ThemeModes } from '../../../../../style/theme';
import { toggleThemeAction } from '../../../../../store/Theme/ThemeActions';

const ThemeToggler = () => {
    const dispatch = useDispatch();

    const themeMode = useTypedSelector((state) => state.theme.themeMode);

    const isDarkTheme = themeMode === ThemeModes.DARK;

    const toggleTheme = (themeMode: ThemeModes) => {
        dispatch(toggleThemeAction(themeMode));
    };

    return (
        <ThemeWrapper>
            <Button onClick={() => toggleTheme(ThemeModes.LIGHT)}>
                <LightMode color={isDarkTheme ? 'action' : 'primary'} />
            </Button>
            <Button onClick={() => toggleTheme(ThemeModes.DARK)}>
                <DarkMode color={!isDarkTheme ? 'action' : 'primary'} />
            </Button>
        </ThemeWrapper>
    );
};

export default ThemeToggler;