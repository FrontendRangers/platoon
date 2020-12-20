import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Box, BoxProps } from './';

export default {
    title: 'Primitives/Box',
    component: Box,
} as Meta;

export const Default: Story<BoxProps> = () => <Box>Box</Box>;

export const CustomPadding: Story<BoxProps> = () => <Box p="md">Box</Box>;

export const CustomBackgroundColor: Story<BoxProps> = () => (
    <Box bg="yellow">Box</Box>
);

export const CustomTextColor: Story<BoxProps> = () => (
    <Box color="primary">Box</Box>
);
