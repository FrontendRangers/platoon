import React from 'react';
import { FormElement } from './';
import { Input } from '..';
import { Meta, Story } from '@storybook/react';
import { FormElementProps } from './FormElement';

export default {
    title: 'Forms/FormElement',
    component: FormElement,
} as Meta;

export const Default: Story<FormElementProps> = (args) => (
    <FormElement {...args}>
        <FormElement.Label>Label</FormElement.Label>
        <Input />
        <FormElement.Hint>Hint</FormElement.Hint>
        <FormElement.Error>Error</FormElement.Error>
    </FormElement>
);
