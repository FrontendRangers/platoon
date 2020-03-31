import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type TextareaProps = BoxProps;

type Props = TextareaProps;

const Textarea: React.FC<Props> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default Textarea;
