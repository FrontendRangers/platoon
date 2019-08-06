import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';
import HeartIcon from '../../icons/heart';

storiesOf('Components|Actions.Button.Variants', module)
    .add('default', () => <Button>Button</Button>)
    .add('primary', () => (
        <Button variant={'primary'} onClick={() => alert(`You've clicked me`)}>
            Button
        </Button>
    ))
    .add('secondary', () => <Button variant={'secondary'}>Button</Button>)
    .add('danger', () => <Button variant={'danger'}>Button</Button>)
    .add('disabled', () => <Button disabled>Button</Button>);

storiesOf('Components|Actions.Button.Sizes', module)
    .add('default', () => <Button>Button</Button>)
    .add('xsmall', () => <Button size={'xs'}>Button</Button>)
    .add('small', () => <Button size={'sm'}>Button</Button>)
    .add('large', () => <Button size={'lg'}>Button</Button>)
    .add('xlarge', () => <Button size={'xl'}>Button</Button>);

storiesOf('Components|Actions.Button', module)
    .add('with an icon', () => <Button icon={HeartIcon}>Eat</Button>)
    .add('multiple', () => (
        <>
            <Button mr={'sm'}>Button</Button>
            <Button>Button</Button>
        </>
    ));
