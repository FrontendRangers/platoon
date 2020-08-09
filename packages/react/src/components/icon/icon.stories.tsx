import React from 'react';
import { Icon } from './';

export default {
    title: 'Medias/Icon',
    component: Icon,
};

export const Default = () => <Icon name={'heart'} />;
export const Small = () => <Icon name={'heart'} size="sm" />;
