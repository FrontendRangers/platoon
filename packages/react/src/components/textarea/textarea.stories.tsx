import React from 'react';
import { Textarea } from './';
import { Box } from '../../primitives/box';
import { Meta, Story } from '@storybook/react';
import { TextareaProps } from './Textarea';

export default {
    title: 'Forms/Textarea',
    component: Textarea,
    decorators: [
        (StoryComponent: Story) => (
            <Box width="75vw" p="md">
                <StoryComponent />
            </Box>
        ),
    ],
} as Meta;

export const Default: Story<TextareaProps> = () => (
    <Textarea placeholder="Textarea component" />
);
