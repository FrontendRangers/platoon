import React from 'react';
import { Progress } from './';

export default {
    title: 'Data/Progress',
    component: Progress,
};

export const Default = () => <Progress value="70" max="100" />;
