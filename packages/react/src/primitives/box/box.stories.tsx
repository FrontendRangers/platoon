import React from 'react';
import { Box } from './';

export default {
    title: 'Primitives/Layout/Box',
};

export const Default = () => <Box>Hello</Box>;
export const CustomPadding = () => <Box p={'sm'}>I'm a box</Box>;

CustomPadding.story = {
    name: 'Custom padding',
};

export const CustomBackgroundColor = () => (
    <Box backgroundColor={'success'}>I'm a box</Box>
);

CustomBackgroundColor.story = {
    name: 'Custom background color',
};

export const CustomTextColor = () => <Box color={'red'}>I'm a box</Box>;

CustomTextColor.story = {
    name: 'Custom text color',
};
