import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';
import HeartIcon from '../../icons/heart';

storiesOf('Components|Actions.Button', module)
    .add('with text', () => <Button>Hello</Button>)
    .add('with an icon', () => <Button icon={HeartIcon}>Eat</Button>)
    .add('multiple', () => (
        <>
            <Button mr={'sm'}>Hello</Button>
            <Button>Hello</Button>
        </>
    ));
