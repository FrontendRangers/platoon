import React from 'react';
import { Progress } from './';

export default {
    title: 'Others/Progress',
};

export const Default = () => <Progress value="70" max="100"></Progress>;

export const Secondary = () => (
    <Progress variant="secondary" value="70" max="100"></Progress>
);
