import React from 'react';
import { Paragraph } from './';

export default {
    title: 'Typography/Paragraph',
};

export const Default = () => <Paragraph>Paragraph component</Paragraph>;

export const Large = () => (
    <Paragraph fontSize={'lg'}>Paragraph component</Paragraph>
);
