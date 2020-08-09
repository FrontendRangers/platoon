import React from 'react';
import { Box, BoxProps } from '../../primitives/box';
import { CSSObject } from '@styled-system/css';

const chipGroupStyles: CSSObject = {
    display: 'grid',
    gap: 'xxs',
    gridAutoFlow: 'column',
};

type ChipGroupProps = Record<string, unknown>;

type Props = ChipGroupProps & BoxProps;

type ChipGroupComponent = React.FC<Props>;

const ChipGroup: ChipGroupComponent = ({ children, ...props }) => {
    return (
        <Box sx={chipGroupStyles} {...props}>
            {children}
        </Box>
    );
};

export default ChipGroup;
