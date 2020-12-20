import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip } from './';
import { TooltipProps } from './Tooltip';

export default {
    title: 'Overlays/Tooltip',
    component: Tooltip,
} as Meta;

export const Default: Story<TooltipProps> = (args) => (
    <Tooltip {...args} content="I'm a tooltip">
        Tooltip component
    </Tooltip>
);
