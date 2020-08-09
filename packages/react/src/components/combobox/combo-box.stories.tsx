import React from 'react';
import { ComboBox } from '.';

export default {
    title: 'Forms/ComboBox',
    component: ComboBox,
};

const items = ['hello', 'bar'];

export const Default = () => <ComboBox items={items} />;
