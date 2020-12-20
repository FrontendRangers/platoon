import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Popper } from './';
import { Button } from '../../components/button';
import { usePopper } from '../../hooks';
import { PopperProps } from './Popper';

export default {
    title: 'Primitives/Popper',
    component: Popper,
} as Meta;

export const Default: Story<PopperProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    return (
        <>
            <Button onClick={() => setIsOpen(!isOpen)} ref={ref}>
                Trigger
            </Button>
            <Popper {...args} isOpen={isOpen} anchorRef={ref}>
                Popper component
            </Popper>
        </>
    );
};

export const WithHook: Story<PopperProps> = (args) => {
    const { popperProps, triggerProps } = usePopper({
        onOpen: () => console.log('I open'),
    });
    return (
        <>
            <Button {...triggerProps}>Trigger</Button>
            <Popper {...args} {...popperProps}>
                Popper component
            </Popper>
        </>
    );
};
