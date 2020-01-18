import React from 'react';

import { Button } from '.';

export default {
    title: 'Components/Actions/Button',
};

export const Base = () => <Button>Button</Button>;

Base.story = {
    name: 'base',
};

export const Primary = () => (
    // eslint-disable-next-line no-undef
    <Button variant={'primary'} onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

Primary.story = {
    name: 'primary',
};

export const Secondary = () => <Button variant={'secondary'}>Button</Button>;

Secondary.story = {
    name: 'secondary',
};

export const Danger = () => <Button variant={'danger'}>Button</Button>;

Danger.story = {
    name: 'danger',
};

export const Disabled = () => <Button disabled>Button</Button>;

Disabled.story = {
    name: 'disabled',
};

export const Xsmall = () => <Button size={'xs'}>Button</Button>;

Xsmall.story = {
    name: 'xsmall',
};

export const Small = () => <Button size={'sm'}>Button</Button>;

Small.story = {
    name: 'small',
};

export const Large = () => <Button size={'lg'}>Button</Button>;

Large.story = {
    name: 'large',
};

export const Xlarge = () => <Button size={'xl'}>Button</Button>;

Xlarge.story = {
    name: 'xlarge',
};

export const WithAnIcon = () => <Button icon={'heart'}>Eat</Button>;

WithAnIcon.story = {
    name: 'with an icon',
};

export const Multiple = () => (
    <>
        <Button mr={'sm'}>Button</Button>
        <Button>Button</Button>
    </>
);

Multiple.story = {
    name: 'multiple',
};
