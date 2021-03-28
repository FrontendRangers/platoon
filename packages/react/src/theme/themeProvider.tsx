import React from 'react';
import { DefaultTheme, ThemeProvider } from '@platoon/system';
import { ColorMode, ColorModeProvider } from './colorModes';

interface PlatoonThemeProviderProps {
    theme?: DefaultTheme;
    mode?: ColorMode;
}

export const PlatoonThemeProvider: React.FC<PlatoonThemeProviderProps> = (
    props,
) => {
    const { children, theme = {}, mode = 'light' } = props;
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider value={{ colorMode: mode }}>
                {children}
            </ColorModeProvider>
        </ThemeProvider>
    );
};
