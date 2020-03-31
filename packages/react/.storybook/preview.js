import React from 'react';
import styled from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './configs/contexts';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { Preview, Story } from './components';

//////////////////////////////////////////////////////

// functions from Circuit UI - https://github.com/sumup-oss/circuit-ui/blob/master/.storybook/util/story-helpers.js

function position(item, array = []) {
    const index = array.indexOf(item);
    // Show unsorted items at the bottom.
    return index === -1 ? 10000 : index;
}

function splitStoryName(name) {
    return name.split('/');
}

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

//////////////////////////////////////////////////////

const SORT_ORDER = {
    Introduction: ['Welcome', 'Getting Started', 'Theming', 'Color Modes'],
    Primitives: ['Box'],
    Typography: ['Text'],
    Actions: ['Button'],
    Forms: ['Input', 'Checkbox', 'Radio'],
    Medias: [],
    Navigation: [],
    Overlays: [],
    Layout: [],
    Others: [],
    Hooks: [],
};

addParameters({
    options: {
        storySort: sortStories(SORT_ORDER),
        showRoots: true,
    },
    docs: { components: { Story, Preview } },
});

//////////////////////////////////////////////////////

const StoryComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .sbdocs & {
        min-height: auto;
    }
`;

const withStoryStyles = (storyFn) => {
    return <StoryComponent>{storyFn()}</StoryComponent>;
};

//////////////////////////////////////////////////////

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withStoryStyles);
