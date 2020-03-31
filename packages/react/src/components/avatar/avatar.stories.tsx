import React from 'react';
import { Avatar } from './';

// import docs from './avatar.mdx';

export default {
    title: 'Medias/Avatar',
    component: Avatar,
    // parameters: {
    //     docs: { page: docs },
    // },
};

export const Default = () => (
    <Avatar image={'https://picsum.photos/200'}></Avatar>
);
