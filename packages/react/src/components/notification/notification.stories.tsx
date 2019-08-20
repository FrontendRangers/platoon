import React from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from './';

storiesOf('Components|Overlays.Notification', module).add('default', () => (
    <Notification>Notification component</Notification>
));
