import React from 'react';
import { Overlay } from './';

export default {
    title: 'Primitives/Overlay',
    component: Overlay,
};

export const Default = () => (
    <>
        <p>Outside the overlay</p>
        <Overlay>Inside the overlay</Overlay>
    </>
);
