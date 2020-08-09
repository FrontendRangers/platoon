import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type AccordionProps = Record<string, unknown>;

type Props = AccordionProps & BoxProps;

const Accordion: React.FC<Props> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default Accordion;
