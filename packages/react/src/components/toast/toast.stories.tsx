import React from 'react';
import { Toast } from '.';

export default {
    title: 'Overlays/Toast',
    component: Toast,
};

export const Default = () => (
    <Toast title="Toast title" description="Toast description" />
);
