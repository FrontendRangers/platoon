import React, { forwardRef } from 'react';
import { Box } from '../..';
import { MarginProps } from 'styled-system';

const controlStyles = {
    display: 'flex',
    bg: 'neutral.500',
    borderRadius: 'round',
    width: '24px',
    height: '14px',
    p: '2px',
};

const toggleStyles = {
    bg: 'neutral.0',
    borderRadius: 'round',
    width: '10px',
    height: '10px',
};

export type SwitchProps = MarginProps;

const Switch: React.FC<SwitchProps> = forwardRef(
    ({ ...props }, ref: React.RefObject<any>) => (
        <Box as="label" {...props}>
            <Box
                as="input"
                type="checkbox"
                base={{ opacity: '0' }}
                ref={ref}
            ></Box>
            <Box base={controlStyles}>
                <Box base={toggleStyles}></Box>
            </Box>
        </Box>
    ),
);

Switch.displayName = 'Switch';

export { Switch };
