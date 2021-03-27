import React from 'react';
import {
    Preflight,
    ThemeProvider,
    ColorModeProvider,
    useColorMode,
    defaultTheme,
    DefaultTheme,
} from '@xstyled/styled-components';

export type ColorMode = 'light' | 'dark';

interface PlatoonThemeProviderProps {
    theme?: DefaultTheme;
    mode?: ColorMode;
}

const PlatoonThemeProvider: React.FC<PlatoonThemeProviderProps> = (props) => {
    const { children, theme = defaultTheme } = props;
    return (
        <ThemeProvider theme={theme}>
            <Preflight />
            {children}
        </ThemeProvider>
    );
};

export { PlatoonThemeProvider, ColorModeProvider, useColorMode };
