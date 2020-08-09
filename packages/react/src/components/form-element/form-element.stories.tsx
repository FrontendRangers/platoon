import React from 'react';
import { FormElement } from './';
import { Input } from '..';

export default {
    title: 'Forms/FormElement',
    component: FormElement,
};

export const Default = () => (
    <FormElement label="A form element">
        <Input />
    </FormElement>
);
