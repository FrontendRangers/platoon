import React from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from './';

storiesOf('Primitives|Overlay', module).add('default', () => (
    <>
        <p>Overlay component</p>
        <Overlay></Overlay>
    </>
));
