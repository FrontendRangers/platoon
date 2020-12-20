import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chip } from './';
import { ChipProps } from './Chip';

export default {
    title: 'Data/Chip',
    component: Chip,
} as Meta;

export const Default: Story<ChipProps> = (args) => (
    <Chip {...args}>Chip component</Chip>
);
