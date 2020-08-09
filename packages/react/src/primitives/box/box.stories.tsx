import React from 'react';
import { Box } from './';
export default {
    title: 'Primitives/Box',
    component: Box,
};

export const Default = () => <Box>Hello</Box>;

export const CustomPadding = () => <Box p="sm">I'm a box</Box>;

export const CustomBackgroundColor = () => (
    <Box backgroundColor="primary.500">I'm a box</Box>
);

export const CustomTextColor = () => <Box color="primary.500">I'm a box</Box>;
