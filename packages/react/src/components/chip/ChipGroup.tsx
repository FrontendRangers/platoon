import React from 'react';
import { Box } from '../../primitives/box';

type ChipGroupProps = Record<string, unknown>;

type ChipGroupComponent = React.FC<ChipGroupProps>;

const ChipGroup: ChipGroupComponent = ({ children, ...props }) => {
    return <Box {...props}>{children}</Box>;
};

export default ChipGroup;
