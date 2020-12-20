import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { platoon } from '@platoon/system';
import { IconButton } from '../button';

export interface ChipProps extends ComponentPropsWithRef<'span'> {
    onDismiss?: () => void;
}

const Chip = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
    const { children, onDismiss, ...rest } = props;
    const handleDismiss = () => onDismiss && onDismiss();
    return (
        <platoon.span ref={ref} {...rest}>
            {children}
            {onDismiss && <IconButton onClick={handleDismiss} />}
        </platoon.span>
    );
});

Chip.displayName = 'Chip';

export default Chip;
