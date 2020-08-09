import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Overlay } from '../../primitives/overlay';
import { Portal } from '../../primitives/portal';
import { CSSObject } from '@styled-system/css';
import { Fade } from '../..';
import { IconButton } from '../button';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

const modalStyles: CSSObject = {
    alignSelf: 'center',
    mt: 'md',
    mx: 'auto',
    width: '400px',
};

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
        if (!onClose) {
            return;
        }
        onClose();
    };
    return (
        <>
            {isOpen && (
                <Portal>
                    <Fade in={isOpen}>
                        <Overlay>
                            <Box sx={modalStyles} {...props}>
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
