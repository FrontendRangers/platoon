import React from 'react';
import { Avatar } from './';

export default {
    title: 'Components/Medias/Avatar',
};

export const Default = () => (
    <Avatar image={'https://picsum.photos/200'}></Avatar>
);

Default.story = {
    name: 'default',
};
