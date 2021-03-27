import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxProps } from './';
import CheckboxGroup from './CheckboxGroup';

export default {
    title: 'Forms/Checkbox',
    component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
    <Checkbox label="A checkbox button" {...args} />
);

export const Group: Story<CheckboxProps> = () => (
    <CheckboxGroup>
        <Checkbox label="Checkbox 1" />
        <Checkbox label="Checkbox 1" />
        <Checkbox label="Checkbox 1" />
    </CheckboxGroup>
);
