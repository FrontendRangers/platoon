import React from 'react';
import { Box } from '../../primitives/box';

export type AccordionProps = Record<string, unknown>;

type AccordionComponent = React.FC<AccordionProps>;

const Accordion: AccordionComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export default Accordion;
