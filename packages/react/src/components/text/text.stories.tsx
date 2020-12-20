import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text } from './';
import { TextProps } from './Text';

export default {
    title: 'Typography/Text',
    component: Text,
} as Meta;

export const Default: Story<TextProps> = (args) => (
    <Text {...args}>I'm some text</Text>
);

export const AsParagraph: Story<TextProps> = () => (
    <Text as="p">I'm a paragraph</Text>
);

export const Large: Story<TextProps> = () => (
    <Text fontSize="lg">I'm a large text</Text>
);
