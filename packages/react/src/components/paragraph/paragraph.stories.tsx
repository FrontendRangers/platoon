import React from 'react';
import { Paragraph } from './';

export default {
    title: 'Components/Typography/Paragraph',
};

export const Default = () => <Paragraph>Paragraph component</Paragraph>;

Default.story = {
    name: 'default',
};

export const Large = () => (
    <Paragraph fontSize={'lg'}>Paragraph component</Paragraph>
);

Large.story = {
    name: 'large',
};
