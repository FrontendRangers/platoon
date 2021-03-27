import { useRef, useEffect } from 'react';
import {
    createPopper,
    Instance,
    Placement,
    VirtualElement,
} from '@popperjs/core';

export interface UsePopperProps {
    placement?: Placement;
}

const usePopper = (args: UsePopperProps = {}) => {
    const anchorRef = useRef<Element | VirtualElement | null>(null);
    const popperRef = useRef<HTMLElement | null>(null);

    const popperInstance = useRef<Instance | null>(null);

    useEffect(() => {
        if (!anchorRef.current || !popperRef.current) {
            return;
        }

        if (popperInstance.current) {
            popperInstance.current.destroy();
            popperInstance.current = null;
        }

        popperInstance.current = createPopper(
            anchorRef.current,
            popperRef.current,
            {
                placement: 'top-start',
                strategy: 'fixed',
                ...args,
            },
        );
        return () => {
            popperInstance.current?.destroy();
            popperInstance.current = null;
        };
    }, []);

    return {
        anchorRef: <T extends Element | VirtualElement>(node: T | null) => {
            anchorRef.current = node;
        },
        popperRef: <T extends HTMLElement>(node: T | null) => {
            popperRef.current = node;
        },
    };
};

export default usePopper;
