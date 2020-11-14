import React, { LabelHTMLAttributes } from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type LabelProps = BoxProps & LabelHTMLAttributes<HTMLLabelElement>;

type LabelComponent = React.FC<LabelProps>;

const Label: LabelComponent = ({ children, ...props }) => (
    <Box as="label" {...props}>
        {children}
    </Box>
);

export default Label;
