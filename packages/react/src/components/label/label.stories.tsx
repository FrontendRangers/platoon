import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label } from './';
import { LabelProps } from './Label';

export default {
    title: 'Forms/Label',
    component: Label,
} as Meta;

export const Default: Story<LabelProps> = (args) => (
    <Label {...args}>Label component</Label>
);
