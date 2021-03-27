import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from './';

export default {
    title: 'Feedback/Alert',
    component: Alert,
} as Meta;

export const Default: Story<AlertProps> = (args) => (
    <Alert {...args}>
        <Alert.Title>Alert</Alert.Title>
        <Alert.Description>Alert description</Alert.Description>
    </Alert>
);
