import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './';

storiesOf('Components|Overlays.Modal', module).add('default', () => (
    <Modal>I'm a modal</Modal>
));
