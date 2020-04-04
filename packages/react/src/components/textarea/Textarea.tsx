import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type TextareaProps = BoxProps;

type Props = TextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<Props> = ({ ...props }) => (
    <Box as="textarea" {...props}></Box>
);

export default Textarea;
