import React, { useRef, useState } from 'react';
import { Popper } from './';
import { Button } from '../../components/button';
import { usePopper } from '../../hooks';

export default {
    title: 'Primitives/Popper',
    component: Popper,
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    return (
        <>
            <Button onClick={() => setIsOpen(!isOpen)} ref={ref}>
                Trigger
            </Button>
            <Popper isOpen={isOpen} anchorRef={ref}>
                Popper component
            </Popper>
        </>
    );
};

export const WithHook = () => {
    const { popperProps, triggerProps } = usePopper({
        onOpen: () => console.log('I open'),
    });
    return (
        <>
            <Button {...triggerProps}>Trigger</Button>
            <Popper {...popperProps}>Popper component</Popper>
        </>
    );
};
