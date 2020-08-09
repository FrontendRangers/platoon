import React, { useEffect, useRef, useCallback, useState } from 'react';
import {
    createPopper,
    Options as PopperOptions,
    Instance,
} from '@popperjs/core';

import { Box } from '../../primitives/box';
import { Portal } from '../portal';

export interface PopperProps {
    anchorRef: React.RefObject<any>;
    isOpen: boolean;
    popperOptions?: Partial<PopperOptions>;
}

const defaultPopperOptions: PopperOptions = {
    placement: 'auto',
    modifiers: [],
    strategy: 'absolute',
};

type PopperComponent = React.FC<PopperProps>;

const Popper: PopperComponent = ({
    children,
    anchorRef,
    isOpen,
    popperOptions = defaultPopperOptions,
    ...props
}) => {
    const popupRef = useRef<HTMLElement | null>(null);
    const popperRef = useRef<Instance | null>(null);

    const [exited, setExited] = useState(true);
    const [hasTransition] = useState<boolean>(
        !!children && typeof children === 'function',
    );

    const handleOpen = useCallback(() => {
        if (!anchorRef.current || !popupRef.current || !isOpen) {
            return;
        }

        if (popperRef.current) {
            popperRef.current.destroy();
            popperRef.current = null;
        }

        const popper = createPopper(
            anchorRef.current,
            popupRef.current,
            popperOptions,
        );
        popperRef.current = popper;
    }, [isOpen, popperOptions, popupRef, anchorRef]);

    const handleClose = (): void => {
        if (!popperRef.current) {
            return;
        }

        popperRef.current.destroy();
        popperRef.current = null;
    };

    // Function triggered by Transition
    const handleEnter = (): void => {
        setExited(false);
    };

    // Function triggered by Transition
    const handleExited = (): void => {
        setExited(true);
        handleClose();
    };

    React.useEffect(() => {
        if (popperRef.current) {
            popperRef.current.update();
        }
    });

    React.useEffect(() => {
        handleOpen();
    }, [handleOpen]);

    useEffect(() => {
        return (): void => {
            handleClose();
        };
    }, []);

    useEffect(() => {
        if (!isOpen && !hasTransition) {
            // Otherwise handleExited will call this.
            handleClose();
        }
    }, [hasTransition, isOpen]);

    if (!isOpen && exited) {
        // Prevent the Portal to be rendered
        return null;
    }

    return (
        <Portal>
            <Box ref={popupRef} {...props}>
                {typeof children === 'function'
                    ? children({
                          TransitionProps: {
                              in: isOpen,
                              onEnter: handleEnter,
                              onExited: handleExited,
                          },
                      })
                    : children}
            </Box>
        </Portal>
    );
};

Popper.displayName = 'Popper';

export default Popper;
