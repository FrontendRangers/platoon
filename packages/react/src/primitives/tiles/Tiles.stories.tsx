import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tiles, TilesProps } from '.';
import { Box } from '../box';

export default { title: 'Primitives/Tiles', component: Tiles } as Meta;

export const Base: Story<TilesProps> = (args) => (
    <Tiles {...args}>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
        <Box p="sm" backgroundColor="blue" color="white">
            Content
        </Box>
    </Tiles>
);
