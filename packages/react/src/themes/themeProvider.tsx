import React from 'react';
import { ThemeProvider } from 'styled-components';

interface PlatoonThemeProviderProps {
    children: React.ReactNode;
    theme: any;
}

const PlatoonThemeProvider = ({
    children,
    theme,
}: PlatoonThemeProviderProps) => (
    <ThemeProvider theme={theme}>
        <>{children}</>
    </ThemeProvider>
);

export default PlatoonThemeProvider;
