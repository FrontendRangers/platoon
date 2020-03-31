import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type FormElementProps = BoxProps;

type Props = FormElementProps;

const FormElement: React.FC<Props> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default FormElement;
