import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Center, CenterProps } from './';

export default { title: 'Primitives/Center', component: Center } as Meta;

export const Base: Story<CenterProps> = (args) => (
    <Center {...args}>Content</Center>
);

Base.args = {
    color: 'white',
    backgroundColor: 'rebeccapurple',
    size: '300px',
};
