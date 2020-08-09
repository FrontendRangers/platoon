import React from 'react';
import { Tooltip } from './';

export default {
    title: 'Overlays/Tooltip',
    component: Tooltip,
};

export const Default = () => (
    <Tooltip content="I'm a tooltip">Tooltip component</Tooltip>
);
