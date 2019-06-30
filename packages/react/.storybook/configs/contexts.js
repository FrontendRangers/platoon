import React from 'react';
import PlatoonThemeProvider from '../../src/themes/themeProvider';
import GlobalStyles from '../../src/themes/globals';
import theme from '../../src/themes/theme';

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
            { name: 'Light Theme', props: { theme } },
            {
                name: 'Dark Theme',
                props: { theme },
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
