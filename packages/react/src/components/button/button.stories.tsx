import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
    title: 'Actions/Button',
    component: Button,
} as Meta;

export const Base: Story<ButtonProps> = (args) => (
    <Button {...args}>Button</Button>
);

// export const asALink: Story<ButtonProps> = () => <Button as="a">Button</Button>;

// export const Primary: Story<ButtonProps> = (args) => (
//     <Button {...args}>Button</Button>
// );

// Primary.args = { intent: 'primary' };

// export const Secondary: Story<ButtonProps> = (args) => (
//     <Button {...args}>Button</Button>
// );

// Secondary.args = { intent: 'secondary' };

// export const Danger: Story<ButtonProps> = () => (
//     <Button intent={'danger'}>Button</Button>
// );

// export const Disabled: Story<ButtonProps> = () => (
//     <Button isDisabled>Button</Button>
// );

// export const Small: Story<ButtonProps> = () => (
//     <Button size="sm">Button</Button>
// );

// export const Large: Story<ButtonProps> = () => (
//     <Button size="lg">Button</Button>
// );

// export const WithAnIcon: Story<ButtonProps> = () => (
//     <Button icon="heart">Eat</Button>
// );

// export const Multiple: Story<ButtonProps> = () => (
//     <>
//         <Button>Button</Button>
//         <Button>Button</Button>
//     </>
// );
