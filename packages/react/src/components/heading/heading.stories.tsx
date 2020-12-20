import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading } from './';
import { HeadingProps } from './Heading';

export default {
    title: 'Typography/Heading',
    component: Heading,
} as Meta;

export const Default: Story<HeadingProps> = (args) => (
    <Heading {...args}>I'm an heading</Heading>
);

export const Heading1: Story<HeadingProps> = () => (
    <Heading as="h1" textStyle="heading1">
        I'm an heading
    </Heading>
);

export const Heading2: Story<HeadingProps> = () => (
    <Heading as="h2" textStyle="heading2">
        I'm an heading
    </Heading>
);

export const Heading3: Story<HeadingProps> = () => (
    <Heading as="h3" textStyle="heading3">
        I'm an heading
    </Heading>
);

export const Heading4: Story<HeadingProps> = () => (
    <Heading as="h4" textStyle="heading4">
        I'm an heading
    </Heading>
);
