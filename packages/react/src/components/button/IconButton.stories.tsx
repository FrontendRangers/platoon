import React from 'react';
import { IconButton } from '.';

export default {
    title: 'Actions/Button/IconButton',
    component: IconButton,
};

export const Base = () => (
    <IconButton icon="chevronDown" onClick={() => alert(`You've clicked me`)} />
);
