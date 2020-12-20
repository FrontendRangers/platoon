import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ComboBox } from '.';
import { ComboBoxProps } from './ComboBox';

export default {
    title: 'Forms/ComboBox',
    component: ComboBox,
} as Meta;

export const Default: Story<ComboBoxProps> = (args) => <ComboBox {...args} />;
