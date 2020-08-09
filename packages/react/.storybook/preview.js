import { addParameters } from '@storybook/react';

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

addParameters({
    options: {
        storySort: sortStories(SORT_ORDER),
    },
});

export const globalArgTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'category',
            items: ['none', 'light', 'dark', 'Bootstrap'],
        },
    },
};

export const decorators = [];
