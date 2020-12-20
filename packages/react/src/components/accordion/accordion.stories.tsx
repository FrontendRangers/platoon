import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps } from './';

export default {
    title: 'Data/Accordion',
    component: Accordion,
    subcomponents: { Pane: Accordion.Pane },
} as Meta;

export const Default: Story<AccordionProps> = (args) => (
    <Accordion {...args}>
        <Accordion.Pane>Pane 1</Accordion.Pane>
        <Accordion.Pane>Pane 2</Accordion.Pane>
    </Accordion>
);
