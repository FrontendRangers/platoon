import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Stack, StackProps } from './';
import { Box } from '../box';

export default { title: 'Primitives/Stack', component: Stack } as Meta;

export const Base: Story<StackProps> = (args) => (
    <Stack {...args}>
        <Box>Content</Box>
        <Box>Content</Box>
        <Box>Content</Box>
        <Box>Content</Box>
    </Stack>
);
