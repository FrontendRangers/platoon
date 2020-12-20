import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from './';
import { SelectProps } from './Select';

export default {
    title: 'Forms/Select',
    component: Select,
} as Meta;

export const Default: Story<SelectProps> = (args) => {
    const handleChange = (selectedItem: any) => console.log(selectedItem);
    return <Select {...args} onChange={handleChange} />;
};
