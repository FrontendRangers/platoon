import React, { useRef, useState } from 'react';
import { Popper } from './';
import { Button } from '../../components/button';

export default {
    title: 'Primitives/Popper',
};

export const base = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    return (
        <>
            <Button onClick={() => setIsOpen(!isOpen)} ref={ref}>
                Trigger
            </Button>
            <Popper isOpen={isOpen} triggerRef={ref}>
                Popper component
            </Popper>
        </>
    );
};
