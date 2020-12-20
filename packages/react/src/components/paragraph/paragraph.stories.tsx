import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Paragraph } from './';
import { ParagraphProps } from './Paragraph';

export default {
    title: 'Typography/Paragraph',
    component: Paragraph,
} as Meta;

export const Default: Story<ParagraphProps> = (args) => (
    <Paragraph {...args}>Paragraph component</Paragraph>
);

export const Large: Story<ParagraphProps> = (args) => (
    <Paragraph fontSize="lg" {...args}>
        Paragraph component
    </Paragraph>
);
