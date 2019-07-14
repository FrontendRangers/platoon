import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './';

storiesOf('Primitives|Layout.Box', module)
    .add('Default', () => <Box>Hello</Box>)
    .add('Custom padding', () => <Box p={'sm'}>I'm a box</Box>)
    .add('Custom background color', () => (
        <Box backgroundColor={'rebeccapurple'}>I'm a box</Box>
    ))
    .add('Custom text color', () => <Box color={'red'}>I'm a box</Box>);
