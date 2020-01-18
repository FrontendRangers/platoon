import React from 'react';
import { Heading } from './';

export default {
    title: 'Components/Typography/Heading',
};

export const Default = () => <Heading>I'm an heading</Heading>;

Default.story = {
    name: 'default',
};

export const H1 = () => <Heading as={'h1'}>I'm an heading</Heading>;

H1.story = {
    name: 'h1',
};
