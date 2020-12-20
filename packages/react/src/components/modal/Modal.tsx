import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { DismissButton } from '../button';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { platoon } from '@platoon/system';

export interface ModalProps extends ComponentPropsWithRef<'div'> {
    isOpen: boolean;
    onClose: () => void;
}

const Component = forwardRef<HTMLDivElement, ModalProps>(
    ({ children, isOpen, onClose, ...props }, ref) => {
        const handleOnClose = () => {
            onClose?.();
        };
        return (
            <>
                {isOpen && (
                    <platoon.div ref={ref} {...props}>
                        <DismissButton onClick={handleOnClose} />
                        {children}
                    </platoon.div>
                )}
            </>
        );
    },
);

Component.displayName = 'Modal';

const Modal = Object.assign(Component, {
    Header: ModalHeader,
    Footer: ModalFooter,
});

export default Modal;
