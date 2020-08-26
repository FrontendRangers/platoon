import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Overlay } from '../../primitives/overlay';
import { Portal } from '../../primitives/portal';
import { Fade } from '../..';
import { IconButton } from '../button';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

export type ModalProps = {
    isOpen: boolean;
    onClose?: () => void;
};

type Props = ModalProps & BoxProps;

interface ModalComponent extends React.FC<Props> {
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
