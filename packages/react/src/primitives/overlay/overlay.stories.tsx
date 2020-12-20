import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Overlay } from './';
import { OverlayProps } from './Overlay';

export default {
    title: 'Primitives/Overlay',
    component: Overlay,
} as Meta;

export const Default: Story<OverlayProps> = (args) => (
    <>
        <p>Outside the overlay</p>
        <Overlay {...args}>Inside the overlay</Overlay>
    </>
);
