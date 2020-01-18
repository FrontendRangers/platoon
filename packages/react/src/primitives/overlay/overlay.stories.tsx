import React from 'react';
import { Overlay } from './';

export default {
    title: 'Primitives/Overlay',
};

export const Default = () => (
    <>
        <p>Overlay component</p>
        <Overlay></Overlay>
    </>
);

Default.story = {
    name: 'default',
};
