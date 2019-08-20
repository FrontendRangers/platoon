import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SlidePanel } from './';
import { Button } from '../button';

storiesOf('Components|Overlays.Slide Panel', module).add('default', () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            <SlidePanel isOpen={isOpen}>Slide Panel component</SlidePanel>
        </>
    );
});
