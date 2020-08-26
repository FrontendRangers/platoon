import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

const ColorModeContext = createContext<string | null>(null);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    return context;
};

const ColorModeProvider = ({ value, children }) => {
    return (
        <ColorModeContext.Provider value={value}>
            {children}
        </ColorModeContext.Provider>
    );
};

interface PlatoonThemeProviderProps {
    theme: any;
    mode?: string;
}

const PlatoonThemeProvider: React.FC<PlatoonThemeProviderProps> = ({
    children,
    theme = {},
    mode = null,
}) => (
    <ThemeProvider theme={theme}>
        <ColorModeProvider value={mode}>
            <>{children}</>
        </ColorModeProvider>
    </ThemeProvider>
);

export { PlatoonThemeProvider as ThemeProvider };
