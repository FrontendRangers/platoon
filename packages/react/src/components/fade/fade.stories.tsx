import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Fade } from './';
import { Button } from '../';
import { FadeProps } from './Fade';
import { platoon } from '@platoon/system';

export default {
    title: 'Transitions/Fade',
    component: Fade,
} as Meta;

export const Default: Story<FadeProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleTransition = () => setIsOpen(!isOpen);
    return (
        <>
            <Button onClick={toggleTransition}>Trigger transition</Button>
            <Fade {...args} in={isOpen}>
                <platoon.div>Hello transition</platoon.div>
            </Fade>
        </>
    );
};
