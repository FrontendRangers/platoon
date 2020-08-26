import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type LabelProps = BoxProps & React.LabelHTMLAttributes<HTMLLabelElement>;

type LabelComponent = React.FC<LabelProps>;

const Label: LabelComponent = ({ children, ...props }) => (
    <Box as="label" {...props}>
        {children}
    </Box>
);

export default Label;
