import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from './';
import { IconProps } from './Icon';

export default {
    title: 'Medias/Icon',
    component: Icon,
    args: { name: 'heart' },
} as Meta;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;

export const Small: Story<IconProps> = (args) => <Icon size="sm" {...args} />;
