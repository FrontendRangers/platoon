import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Radio, RadioProps } from './';

export default {
    title: 'Forms/Radio',
    component: Radio,
} as Meta;

export const Default: Story<RadioProps> = (args) => (
    <Radio label="A radio button" {...args} />
);
