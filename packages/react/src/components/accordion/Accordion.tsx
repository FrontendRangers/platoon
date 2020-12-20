import React, { FC } from 'react';
import { platoon } from '@platoon/system';

export type AccordionPaneProps = Record<string, any>;

export const Pane: FC<AccordionPaneProps> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
);

export type AccordionProps = Record<string, any>;

type AccordionComposition = {
    Pane: typeof Pane;
};

const Accordion: FC<AccordionProps> & AccordionComposition = ({
    children,
    ...props
}) => <platoon.div {...props}>{children}</platoon.div>;

Accordion.displayName = 'Accordion';

Accordion.Pane = Pane;

export default Accordion;
