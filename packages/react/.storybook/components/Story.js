import React from 'react';
import { Story as StorybookStory } from '@storybook/addon-docs/blocks';
import { Box } from '../../src';

const Story = ({ children, ...props }) => (
    <StorybookStory {...props}>
        <Box backgroundColor="blue">{children}</Box>
    </StorybookStory>
);

export default Story;
