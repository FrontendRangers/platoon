import React from 'react';
import { Breadcrumb } from './';

export default {
    title: 'Navigation/Breadcrumb',
    component: Breadcrumb,
};

export const Default = () => (
    <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About us</Breadcrumb.Item>
    </Breadcrumb>
);
