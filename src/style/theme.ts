export enum ThemeModes {
    LIGHT = 'light',
    DARK = 'dark'
}

const palette = {
    [ThemeModes.LIGHT]: {
        primary: {
            background: '#FFFFFF',
            letterColor: 'black'
        }
    },
    [ThemeModes.DARK]: {
        primary: {
            background: '#A9A9A9',
            letterColor: 'white'
        }
    }
};

export const CreateTheme = (mode: ThemeModes) => {
    return {
        themeMode: mode,
        palette: {
            mode: mode,
            ...palette[mode]
        }
    };
};

