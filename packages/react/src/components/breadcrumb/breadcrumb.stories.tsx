import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumb, BreadcrumbProps } from './';

export default {
    title: 'Navigation/Breadcrumb',
    component: Breadcrumb,
} as Meta;

export const Default: Story<BreadcrumbProps> = (args) => (
    <Breadcrumb {...args}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About us</Breadcrumb.Item>
    </Breadcrumb>
);
