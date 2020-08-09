import React from 'react';
import { Select } from './';

export default {
    title: 'Forms/Select',
    component: Select,
};

export const Default = () => {
    const handleChange = (selectedItem) => console.log(selectedItem);
    return <Select onChange={handleChange} />;
};
