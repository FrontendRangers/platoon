import { useRef, useState, useEffect } from 'react';

export interface UsePopperProps {
    onOpen?: (event: React.MouseEvent<any>) => void;
    onClose?: (event: React.MouseEvent<any>) => void;
    isOpen?: boolean;
    trigger?: 'hover' | 'onclick';
}

const usePopper = ({
    onOpen,
    onClose,
    isOpen: controlledIsOpen = false,
    trigger = 'onclick',
}: UsePopperProps = {}) => {
    const anchorRef = useRef<any>();
    const [isOpen, setIsOpen] = useState(controlledIsOpen);

    useEffect(() => {
        setIsOpen(controlledIsOpen);
    }, [controlledIsOpen]);

    const popperProps = {
        anchorRef,
        isOpen,
    };

    const triggerProps = {
        ref: anchorRef,
        onClick: (event: React.MouseEvent<any>) => {
            if (trigger !== 'onclick') return;
            if (isOpen) {
                if (onClose) {
                    onClose(event);
                }
                setIsOpen(false);
            }
            if (!isOpen) {
                if (onOpen) {
                    onOpen(event);
                }
                setIsOpen(true);
            }
            return;
        },
        onMouseEnter: (event: React.MouseEvent<any>) => {
            if (trigger !== 'hover') return;
            if (!isOpen) {
                if (onOpen) {
                    onOpen(event);
                }
                setIsOpen(true);
            }
            return;
        },
        onMouseLeave: (event: React.MouseEvent<any>) => {
            if (trigger !== 'hover') return;
            if (isOpen) {
                if (onClose) {
                    onClose(event);
                }
                setIsOpen(false);
            }
            return;
        },
    };

    return { anchorRef, popperProps, triggerProps, isOpen };
};

export default usePopper;
