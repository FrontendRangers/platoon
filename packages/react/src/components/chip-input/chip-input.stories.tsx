import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChipInput } from './';
import { ChipInputProps } from './ChipInput';

export default {
    title: 'Forms/ChipInput',
    component: ChipInput,
} as Meta;

export const Default: Story<ChipInputProps> = (args) => <ChipInput {...args} />;
