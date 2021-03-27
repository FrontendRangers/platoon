import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { DismissButton } from '../button';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { platoon } from '@platoon/system';
import ModalBody from './ModalBody';
import { Dialog } from '../../primitives/dialog';

const ModalWrapper = platoon('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const ModalContent = platoon('div', {
    position: 'relative',
    zIndex: '2',
    maxWidth: '400px',
    backgroundColor: 'white',
    boxShadow:
        '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
});

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
            <Dialog isOpen={isOpen} onClose={onClose}>
                <ModalWrapper ref={ref} {...props} onClick={handleOnClose}>
                    <ModalContent>
                        <DismissButton onClick={handleOnClose} />
                        {children}
                    </ModalContent>
                </ModalWrapper>
            </Dialog>
        );
    },
);

Component.displayName = 'Modal';

const Modal = Object.assign(Component, {
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
});

export default Modal;
