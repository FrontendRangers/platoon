import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Toast } from '.';
import { ToastProps } from './Toast';

export default {
    title: 'Overlays/Toast',
    component: Toast,
} as Meta;

export const Default: Story<ToastProps> = (args) => (
    <Toast {...args} title="Toast title" description="Toast description" />
);
