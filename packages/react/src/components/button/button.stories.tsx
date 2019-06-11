import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';
import HeartIcon from '../../icons/heart';

storiesOf('Components|Button', module)
    .add('with text', () => <Button>Hello</Button>)
    .add('as a link', () => <Button href="#">Hello</Button>)
    .add('with an icon', () => <Button icon={<HeartIcon />}>Hello</Button>)
    .add('with an icon on the right', () => (
        <Button icon={<HeartIcon />} iconPosition="right">
            Hello
        </Button>
    ));
