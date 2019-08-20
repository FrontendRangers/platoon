import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './';

storiesOf('Components|Medias.Icon', module).add('default', () => (
    <Icon name={'heart'}></Icon>
));
