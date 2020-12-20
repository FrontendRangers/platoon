import React, { ComponentPropsWithoutRef, FC } from 'react';
import { platoon } from '@platoon/system';
import { Overlay } from '../../primitives/overlay';
import { Portal } from '../../primitives/portal';

type DrawerSide = 'top' | 'right' | 'bottom' | 'left';

export interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
    isOpen: boolean;
    side?: DrawerSide;
}

const Drawer: FC<DrawerProps> = (props) => {
    const { children } = props;
    return (
        <Portal>
            <Overlay>
                <platoon.div>{children}</platoon.div>
            </Overlay>
        </Portal>
    );
};

Drawer.displayName = 'Drawer';

export default Drawer;
