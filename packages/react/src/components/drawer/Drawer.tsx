import React, { ComponentPropsWithoutRef, FC } from 'react';
import { platoon } from '@platoon/system';
import { Dialog } from '../../primitives/dialog';

type DrawerSide = 'top' | 'right' | 'bottom' | 'left';

const DrawerWrapper = platoon('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    variants: {
        side: {
            top: {
                flexDirection: 'column',
                justifyContent: 'flex-start',
            },
            right: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
            },
            bottom: {
                flexDirection: 'column',
                justifyContent: 'flex-end',
            },
            left: {
                flexDirection: 'row',
                justifyContent: 'flex-start',
            },
        },
    },
});

DrawerWrapper.displayName = 'Drawer.Wrapper';

const DrawerContent = platoon('div', {
    boxShadow:
        '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
});

DrawerContent.displayName = 'Drawer.Content';

export interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
    isOpen: boolean;
    onClose: () => void;
    side?: DrawerSide;
}

const Drawer: FC<DrawerProps> = (props) => {
    const { children, isOpen = false, onClose, side } = props;
    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DrawerWrapper side={side} onClick={onClose}>
                <DrawerContent>{children}</DrawerContent>
            </DrawerWrapper>
        </Dialog>
    );
};

Drawer.displayName = 'Drawer';
Drawer.defaultProps = {
    side: 'right',
};

export default Drawer;
