import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Avatar } from './';
import { AvatarProps } from './Avatar';

export default {
    title: 'Medias/Avatar',
    component: Avatar,
    args: {
        image: '/user1.jpg',
    },
} as Meta;

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />;
