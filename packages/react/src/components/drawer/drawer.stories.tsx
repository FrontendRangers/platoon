import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Drawer } from '.';
import { Button } from '../button';
import { DrawerProps } from './Drawer';
import { useDisclosure } from '../../hooks';

export default {
    title: 'Overlays/Drawer',
    component: Drawer,
} as Meta;

export const Default: Story<DrawerProps> = (args) => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onToggle}>Open</Button>
            <Drawer {...args} isOpen={isOpen} onClose={onClose}>
                Drawer component
            </Drawer>
        </>
    );
};
