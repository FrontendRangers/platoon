import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex } from './';
import { FlexProps } from './Flex';
export default {
    title: 'Primitives/Flex',
    component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

Template.args = { children: 'Flex' };

export const Default = Template.bind({});
