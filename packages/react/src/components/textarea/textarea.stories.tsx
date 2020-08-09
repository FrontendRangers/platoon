import React from 'react';
import { Textarea } from './';
import { Box } from '../../primitives/box';

export default {
    title: 'Forms/Textarea',
    component: Textarea,
    decorators: [
        (storyFn) => (
            <Box width="75vw" p="md">
                {storyFn()}
            </Box>
        ),
    ],
};

export const Default = () => <Textarea placeholder="Textarea component" />;
