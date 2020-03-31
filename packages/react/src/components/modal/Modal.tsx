import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { Overlay } from '../../primitives/overlay';
import { Portal } from '../../primitives/portal';

export type ModalProps = {
    isOpen: boolean;
};

type Props = ModalProps & BoxProps;

const Modal: React.FC<Props> = forwardRef(
    ({ children, isOpen, ...props }, forwardedRef) => (
        <>
            {isOpen && (
                <Portal>
                    <Overlay>
                        <Box ref={forwardedRef} {...props}>
                            {children}
                        </Box>
                    </Overlay>
                </Portal>
            )}
        </>
    ),
);

Modal.displayName = 'Modal';

export { Modal };
