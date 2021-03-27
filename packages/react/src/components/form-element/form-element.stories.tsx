import React from 'react';
import { FormElement } from './';
import { Input } from '..';
import { Meta, Story } from '@storybook/react';
import { FormElementProps } from './FormElement';

export default {
    title: 'Forms/FormElement',
    component: FormElement,
    subcomponents: {
        Label: FormElement.Label,
        Description: FormElement.Description,
        Hint: FormElement.Hint,
        Error: FormElement.Error,
    },
} as Meta;

export const Default: Story<FormElementProps> = (args) => (
    <FormElement {...args}>
        <FormElement.Label>Label</FormElement.Label>
        <FormElement.Description>Description</FormElement.Description>
        <Input />
        <FormElement.Hint>Hint</FormElement.Hint>
        <FormElement.Error>Error</FormElement.Error>
    </FormElement>
);
