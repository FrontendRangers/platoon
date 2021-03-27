import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Popper } from '.';
import { Button } from '../../components/button';
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
            {isOpen && (
                <Popper {...args} anchorRef={ref}>
                    Popper component
                </Popper>
            )}
        </>
    );
};
