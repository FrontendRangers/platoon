import React, { useState } from 'react';
import { Drawer } from '.';
import { Button } from '../button';

export default {
    title: 'Overlays/Drawer',
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            <Drawer isOpen={isOpen}>Drawer component</Drawer>
        </>
    );
};
