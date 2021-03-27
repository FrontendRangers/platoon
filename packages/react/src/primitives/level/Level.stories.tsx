import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Level, LevelProps } from './';
import { Box } from '../box';

export default { title: 'Primitives/Level', component: Level } as Meta;

export const Base: Story<LevelProps> = (args) => (
    <Level {...args}>
        <Box>Content</Box>
        <Box>Content</Box>
    </Level>
);
