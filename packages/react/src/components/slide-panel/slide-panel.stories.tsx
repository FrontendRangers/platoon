import React, { useState } from 'react';
import { SlidePanel } from './';
import { Button } from '../button';

export default {
    title: 'Components/Overlays/Slide Panel',
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            <SlidePanel isOpen={isOpen}>Slide Panel component</SlidePanel>
        </>
    );
};

Default.story = {
    name: 'default',
};
