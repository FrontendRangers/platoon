import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton } from '.';
import { IconButtonProps } from './IconButton';

export default {
    title: 'Actions/Button/IconButton',
    component: IconButton,
} as Meta;

export const Base: Story<IconButtonProps> = (args) => (
    <IconButton onClick={() => alert(`You've clicked me`)} {...args} />
);
