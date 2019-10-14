import { configure, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './configs/contexts';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(centered);

// automatically import all files ending in *.stories.tsx
const primitives = require.context(
    '../src/primitives',
    true,
    /\.stories\.tsx$/,
);

const components = require.context(
    '../src/components',
    true,
    /\.stories\.tsx$/,
);

const hooks = require.context('../src/hooks', true, /\.stories\.tsx$/);

configure([primitives, components, hooks], module);
