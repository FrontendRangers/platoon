import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Input, InputProps } from './';

export default {
    title: 'Forms/Input',
    component: Input,
} as Meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;

Default.args = { placeholder: 'Enter text' };

export const Small: Story<InputProps> = (args) => <Input {...args} />;

Small.args = { placeholder: 'A small input' };

export const WithAPlaceholder: Story<InputProps> = () => (
    <Input placeholder="Placeholder" />
);

export const WithAddonLeft: Story<InputProps> = () => (
    <Input addonLeft={<>AddonLeft</>} />
);

export const WithMultipleAddonLeft: Story<InputProps> = () => (
    <Input addonLeft={[<>AddonLeft</>, <>AddonLeft</>]} />
);

export const WithAddonRight: Story<InputProps> = () => (
    <Input addonRight={<>AddonRight</>} />
);

export const WithMultipleAddonRight: Story<InputProps> = () => (
    <Input addonRight={[<>AddonRight</>, <>AddonRight</>]} />
);

export const WithAddonLeftAndRight: Story<InputProps> = () => (
    <Input addonLeft={<>AddonLeft</>} addonRight={<>AddonRight</>} />
);
