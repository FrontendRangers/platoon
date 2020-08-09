import React from 'react';
import { Button } from '.';

export default {
    title: 'Actions/Button',
    component: Button,
};

export const Base = () => (
    <Button onClick={() => alert(`You've clicked me`)}>Button</Button>
);

export const asALink = () => (
    <Button as="a" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const Primary = () => (
    // eslint-disable-next-line no-undef
    <Button intent="primary" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const Secondary = () => (
    <Button intent={'secondary'} onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const Danger = () => (
    <Button intent={'danger'} onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const Disabled = () => (
    <Button isDisabled onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const Small = () => (
    <Button size="sm" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const Large = () => (
    <Button size="lg" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const WithAnIcon = () => (
    <Button icon={'heart'} onClick={() => alert(`You've clicked me`)}>
        Eat
    </Button>
);

export const Multiple = () => (
    <>
        <Button mr={'sm'} onClick={() => alert(`You've clicked me`)}>
            Button
        </Button>
        <Button onClick={() => alert(`You've clicked me`)}>Button</Button>
    </>
);
