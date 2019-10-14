/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';

export const ColorModeContext = createContext({
    colorMode: 'light',
    toggleColorMode: () => {},
});

export const ColorModeProvider = ({ mode = 'light', children }) => {
    const toggle = () => {};
    return (
        <ColorModeContext.Provider
            value={{ colorMode: mode, toggleColorMode: toggle }}
        >
            {children}
        </ColorModeContext.Provider>
    );
};

export const useColorMode = () => {
    const { colorMode } = useContext(ColorModeContext);
    if (colorMode === undefined) {
        throw new Error('useColorMode must be used within a ColorModeProvider');
    }
    return colorMode;
};

interface PlatoonThemeProviderProps {
    children: React.ReactNode;
    theme: any;
    mode: string;
}

export const PlatoonThemeProvider = ({
    children,
    theme,
    mode,
}: PlatoonThemeProviderProps) => (
    <ThemeProvider theme={theme}>
        <ColorModeProvider mode={mode}>{children}</ColorModeProvider>
    </ThemeProvider>
);

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (theme === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};
