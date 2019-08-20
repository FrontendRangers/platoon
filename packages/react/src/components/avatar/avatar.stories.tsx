import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './';

storiesOf('Components|Medias.Avatar', module).add('default', () => (
    <Avatar image={'https://picsum.photos/200'}></Avatar>
));
