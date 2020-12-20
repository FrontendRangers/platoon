import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Drawer } from '.';
import { Button } from '../button';
import { DrawerProps } from './Drawer';

export default {
    title: 'Overlays/Drawer',
    component: Drawer,
} as Meta;

export const Default: Story<DrawerProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            <Drawer {...args} isOpen={isOpen}>
                Drawer component
            </Drawer>
        </>
    );
};
