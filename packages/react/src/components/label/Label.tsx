import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type LabelProps = BoxProps;

type Props = LabelProps & React.HTMLAttributes<HTMLLabelElement>;

type LabelComponent = React.FC<Props>;

const Label: LabelComponent = ({ children, ...props }) => (
    <Box as="label" {...props}>
        {children}
    </Box>
);

export default Label;
