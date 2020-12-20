import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

const ColorModeContext = createContext<string | null>(null);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    return context;
};

export type ColorMode = 'light' | 'dark';

export interface ColorModeProviderProps {
    value?: ColorMode;
    children?: React.ReactNode;
}

export const ColorModeProvider = ({
    value = 'light',
    children,
}: ColorModeProviderProps) => {
    return (
        <ColorModeContext.Provider value={value}>
            {children}
        </ColorModeContext.Provider>
    );
};

interface PlatoonThemeProviderProps {
    theme: any;
    mode?: ColorMode;
}

const PlatoonThemeProvider: React.FC<PlatoonThemeProviderProps> = ({
    children,
    theme = {},
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export { PlatoonThemeProvider as ThemeProvider };
