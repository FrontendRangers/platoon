import React from 'react';
import { Preview as StorybookPreview } from '@storybook/addon-docs/blocks';
import { Box } from '../../src';

const Preview = ({ children, ...props }) => (
    <StorybookPreview withToolbar="true" {...props}>
        <Box backgroundColor="red">{children}</Box>
    </StorybookPreview>
);

export default Preview;
