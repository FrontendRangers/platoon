import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type LabelProps = BoxProps;

type Props = LabelProps;

const Label: React.FC<Props> = ({ children, ...props }) => (
    <Box as="label" {...props}>
        {children}
    </Box>
);

export default Label;
