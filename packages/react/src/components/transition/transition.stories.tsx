import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Transition } from './';
import { Box } from '../../primitives/box';
import { Button } from '../';
import { TransitionProps } from 'react-transition-group/Transition';

export default {
    title: 'Transitions/Transition',
    component: Transition,
} as Meta;

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

export const Default: Story<TransitionProps> = () => {
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
