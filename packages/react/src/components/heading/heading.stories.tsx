import React from 'react';
import { Heading } from './';

export default {
    title: 'Typography/Heading',
    component: Heading,
};

export const Default = () => <Heading>I'm an heading</Heading>;

export const Heading1 = () => <Heading as="h1">I'm an heading</Heading>;

export const Heading2 = () => <Heading as="h2">I'm an heading</Heading>;

export const Heading3 = () => <Heading as="h3">I'm an heading</Heading>;

export const Heading4 = () => <Heading as="h4">I'm an heading</Heading>;
