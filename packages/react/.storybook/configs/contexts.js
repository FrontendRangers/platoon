import React from 'react';
import { PlatoonThemeProvider } from '../../src/themes/themeProvider';
import { GlobalStyles } from '../../src/themes/globals';
import {theme} from '../../src/themes/theme';

const AppProvider = ({ theme, children }) => (
    <PlatoonThemeProvider theme={theme}>
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
                props: { theme: { ...theme, mode: 'light' } },
            },
            {
                name: 'Dark Theme',
                props: { theme: { ...theme, mode: 'dark' } },
                default: true,
            },
        ],
        options: {
            deep: true,
            disable: false,
            cancelable: false,
        },
    },
];
