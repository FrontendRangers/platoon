import React from 'react';
import { Box } from '../../primitives/box';
import { Overlay } from '../../primitives/overlay';
import { Portal } from '../../primitives/portal';
import { Fade } from '../fade';
import { IconButton } from '../button';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

export interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
}

interface ModalComponent extends React.FC<ModalProps> {
    Header: typeof ModalHeader;
    Footer: typeof ModalFooter;
}

const Modal: ModalComponent = ({ children, isOpen, onClose, ...props }) => {
    const handleOnClose = () => {
        onClose?.();
    };
    return (
        <>
            {isOpen && (
                <Portal>
                    <Fade in={isOpen}>
                        <Overlay>
                            <Box {...props}>
                                <IconButton onClick={handleOnClose} />
                                {children}
                            </Box>
                        </Overlay>
                    </Fade>
                </Portal>
            )}
        </>
    );
};

Modal.displayName = 'Modal';

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
