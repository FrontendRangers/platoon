import { createContext } from '@platoon/utils';
import React, { FC } from 'react';
import { Overlay } from '../overlay';
import { Portal } from '../portal';

export const [DialogContextProvider, useDialogContext] = createContext();

export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const Dialog: FC<DialogProps> = (props) => {
    const { children, isOpen = false, onClose } = props;

    const context = { isOpen, onClose };

    return (
        <DialogContextProvider value={context}>
            {context.isOpen && (
                <Portal>
                    <Overlay />
                    {children}
                </Portal>
            )}
        </DialogContextProvider>
    );
};

export default Dialog;
