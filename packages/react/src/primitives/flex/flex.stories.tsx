import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, FlexProps } from './';
import { Box } from '../box';

export default {
    title: 'Primitives/Flex',
    component: Flex,
} as Meta;

export const Base: Story<FlexProps> = (args) => (
    <Flex {...args}>
        <Box width="50px" height="50px" backgroundColor="blue" />
        <Box width="50px" height="50px" backgroundColor="red" />
    </Flex>
);
