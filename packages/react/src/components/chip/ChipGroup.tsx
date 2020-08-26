import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

type ChipGroupProps = BoxProps;

type ChipGroupComponent = React.FC<ChipGroupProps>;

const ChipGroup: ChipGroupComponent = ({ children, ...props }) => {
    return <Box {...props}>{children}</Box>;
};

export default ChipGroup;
