import React, { useState } from 'react';
import { Transition } from './';
import { Box } from '../../primitives/box';
import { Button } from '../';

export default {
    title: 'Transitions/Transition',
    component: Transition,
};

const transitionStyles = {
    entering: {
        opacity: 1,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
    exited: {
        opacity: 0,
    },
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleTransition = () => setIsOpen(!isOpen);
    return (
        <>
            <Button onClick={toggleTransition}>Trigger transition</Button>
            <Transition in={isOpen} transitionStyles={transitionStyles}>
                <Box>Hello transition</Box>
            </Transition>
        </>
    );
};
