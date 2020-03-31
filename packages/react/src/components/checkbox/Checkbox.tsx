import React from 'react';
import { Box } from '../../primitives/box';
import { MarginProps } from 'styled-system';

export type CheckboxProps = MarginProps;

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => (
    <Box {...props}>
        <Box as="label">
            <Box as="input" type="checkbox" />
            Label
        </Box>
    </Box>
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
