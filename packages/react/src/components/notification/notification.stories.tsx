import React from 'react';
import { Notification } from './';

export default {
    title: 'Components/Overlays/Notification',
};

export const Default = () => (
    <Notification>Notification component</Notification>
);

Default.story = {
    name: 'default',
};
