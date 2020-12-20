import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress } from './';
import { ProgressProps } from './Progress';

export default {
    title: 'Data/Progress',
    component: Progress,
} as Meta;

export const Default: Story<ProgressProps> = (args) => (
    <Progress {...args} value="70" max="100" />
);
