import React from 'react';
import { PlatoonThemeProvider, GlobalStyles } from '../src';
import bootstrapTheme from '../src/presets/theme-bootstrap';
import platoonTheme from '../src/presets/theme-platoon';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withPerformance } from 'storybook-addon-performance';

// functions from Circuit UI - https://github.com/sumup-oss/circuit-ui/blob/master/.storybook/util/story-helpers.js

function position(item, array = []) {
    const index = array.indexOf(item);
    // Show unsorted items at the bottom.
    return index === -1 ? 10000 : index;
}

const splitStoryName = (name) => name.split('/');

function sortStories(sortOrder) {
    const groups = Object.keys(sortOrder);

    return (a, b) => {
        const aKind = a[1].kind;
        const bKind = b[1].kind;
        const [aGroup, aComponent] = splitStoryName(aKind);
        const [bGroup, bComponent] = splitStoryName(bKind);

        // Preserve story sort order.
        if (aKind === bKind) {
            return 0;
        }

        // Sort stories in a group.
        if (aGroup === bGroup) {
            const group = sortOrder[aGroup];

            return position(aComponent, group) - position(bComponent, group);
        }

        // Sort groups.
        return position(aGroup, groups) - position(bGroup, groups);
    };
}

const SORT_ORDER = {
    Introduction: ['Welcome', 'Getting Started', 'Theming', 'Color Modes'],
    Tokens: [],
    Primitives: ['Box'],
    Typography: ['Text'],
    Actions: ['Button'],
    Forms: ['Input', 'Checkbox', 'Radio'],
    Medias: [],
    Navigation: [],
    Overlays: [],
    Data: [],
    Transitions: [],
    Layout: [],
    Others: [],
    Hooks: [],
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'category',
            items: [
                { value: 'none', title: 'None' },
                { value: 'light', title: 'Light' },
                { value: 'dark', title: 'Dark' },
                { value: 'bootstrap', title: 'Bootstrap' },
            ],
        },
    },
};

const getTheme = (theme) => {
    const themes = {
        none: { theme: {}, mode: null },
        light: { theme: platoonTheme, mode: 'light' },
        dark: { theme: platoonTheme, mode: 'dark' },
        bootstrap: { theme: bootstrapTheme, mode: 'light' },
    };

    return themes[theme];
};

const fontUrl =
    'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap';

const withThemeProvider = (Story, context) => {
    const { theme, mode } = getTheme(context.globals.theme);
    const fontLink = document.createElement('link');

    fontLink.href = fontUrl;
    fontLink.rel = 'stylesheet';

    document.head.appendChild(fontLink);
    return (
        <PlatoonThemeProvider theme={theme} mode={mode}>
            <GlobalStyles />
            <Story {...context} />
        </PlatoonThemeProvider>
    );
};

export const parameters = {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: sortStories(SORT_ORDER),
    },
    docs: {
        container: ({ children, context }) => {
            const { theme, mode } = getTheme(context.globals.theme);
            return (
                <DocsContainer context={context}>
                    <PlatoonThemeProvider theme={theme} mode={mode}>
                        {children}
                    </PlatoonThemeProvider>
                </DocsContainer>
            );
        },
    },
};

export const decorators = [withThemeProvider, withPerformance];
