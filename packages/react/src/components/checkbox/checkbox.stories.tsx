import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxProps } from './';

export default {
    title: 'Forms/Checkbox',
    component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
    <Checkbox label="A checkbox button" {...args} />
);
