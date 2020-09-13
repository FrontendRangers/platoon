import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { IconButton } from '../button';

export interface ChipProps extends BoxProps {
    onDismiss?: () => void;
}

type ChipComponent = React.ForwardRefExoticComponent<
    ChipProps & React.RefAttributes<HTMLDivElement>
>;

const Chip: ChipComponent = forwardRef(
    ({ children, onDismiss, ...props }, ref) => {
        const handleDismiss = () => onDismiss && onDismiss();
        return (
            <Box ref={ref} {...props}>
                {children}
                {onDismiss && <IconButton onClick={handleDismiss} />}
            </Box>
        );
    },
);

Chip.displayName = 'Chip';

export default Chip;
