import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch } from './';
import { SwitchProps } from './Switch';

export default {
    title: 'Forms/Switch',
    component: Switch,
} as Meta;

export const Default: Story<SwitchProps> = (args) => <Switch {...args} />;
