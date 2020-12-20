import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DismissButton } from '.';
import { DismissButtonProps } from './DismissButton';

export default {
    title: 'Actions/Button/DismissButton',
    component: DismissButton,
} as Meta;

export const Base: Story<DismissButtonProps> = (args) => (
    <DismissButton onClick={() => alert(`You've clicked me`)} {...args} />
);
