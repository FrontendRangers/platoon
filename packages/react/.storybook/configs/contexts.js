import React from 'react';
import { PlatoonThemeProvider } from '../../src/theme/themeProvider';
import { GlobalStyles } from '../../src/theme/globals';
import platoonTheme from '../../src/presets/theme-platoon';
import bootstrapTheme from '../../src/presets/theme-bootstrap';

const AppProvider = ({ theme, mode, children }) => (
    <PlatoonThemeProvider theme={theme} mode={mode}>
        <>
            <GlobalStyles />
            {children}
        </>
    </PlatoonThemeProvider>
);

export const contexts = [
    {
        icon: 'box',
        title: 'Themes',
        components: [AppProvider],
        params: [
            { name: 'No theme', props: { theme: {} } },
            {
                name: 'Light Theme',
                props: { theme: platoonTheme, mode: 'light' },
            },
            {
                name: 'Dark Theme',
                props: { theme: platoonTheme, mode: 'dark' },
                default: true,
            },
            { name: 'Bootstrap', props: { theme: bootstrapTheme } },
        ],
        options: {
            deep: true,
            disable: false,
            cancelable: false,
        },
    },
];
