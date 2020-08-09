import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { CSSObject } from '@styled-system/css';
import { IconButton } from '../button';

const chipStyles: CSSObject = {
    backgroundColor: 'primary',
    p: 'xxs',
    borderRadius: 'round',
};

export interface ChipProps {
    onDismiss?: () => void;
}

type Props = ChipProps & BoxProps;

type ChipComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLDivElement>
>;

const Chip: ChipComponent = forwardRef(
    ({ children, onDismiss, ...props }, ref) => {
        const handleDismiss = () => onDismiss && onDismiss();
        return (
            <Box ref={ref} sx={chipStyles} {...props}>
                {children}
                {onDismiss && <IconButton onClick={handleDismiss} />}
            </Box>
        );
    },
);

Chip.displayName = 'Chip';

export default Chip;
