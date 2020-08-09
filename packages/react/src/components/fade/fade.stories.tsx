import React, { useState } from 'react';
import { Fade } from './';
import { Box } from '../../primitives/box';
import { Button } from '../';

export default {
    title: 'Transitions/Fade',
    component: Fade,
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleTransition = () => setIsOpen(!isOpen);
    return (
        <>
            <Button onClick={toggleTransition}>Trigger transition</Button>
            <Fade in={isOpen}>
                <Box>Hello transition</Box>
            </Fade>
        </>
    );
};
