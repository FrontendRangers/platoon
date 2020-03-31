import React from 'react';
import { Select, SelectOption } from './';

export default {
    title: 'Forms/Select',
};

export const Default = () => (
    <Select>
        <SelectOption value="Option1">Option 1</SelectOption>
        <SelectOption value="Option2">Option 2</SelectOption>
        <SelectOption value="Option3">Option 2</SelectOption>
    </Select>
);
