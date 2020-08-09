import React from 'react';
import { DismissButton } from '.';

export default {
    title: 'Actions/Button/DismissButton',
    component: DismissButton,
};

export const Base = () => (
    <DismissButton onClick={() => alert(`You've clicked me`)} />
);
