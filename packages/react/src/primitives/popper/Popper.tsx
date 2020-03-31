import React, { useEffect, createRef } from 'react';
import { createPopper, Options as PopperOptions } from '@popperjs/core';

import { Box } from '../../primitives/box';
import { Portal } from '../portal';

export interface PopperProps {
    triggerRef: any;
    isOpen: boolean;
    popperOptions?: Partial<PopperOptions>;
}

const Popper: React.FC<PopperProps> = ({
    children,
    triggerRef,
    isOpen,
    popperOptions,
    ...props
}) => {
    const popupRef = createRef<HTMLElement>();

    useEffect(() => {
        if (triggerRef.current && popupRef.current) {
            const popper = createPopper(
                triggerRef.current,
                popupRef.current,
                popperOptions,
            );

            return () => {
                popper.destroy();
            };
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <Portal>
                    <Box ref={popupRef} position="absolute" {...props}>
                        {children}
                    </Box>
                </Portal>
            )}
        </>
    );
};

Popper.displayName = 'Popper';

export { Popper };
