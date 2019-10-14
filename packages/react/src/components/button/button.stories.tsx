import React from 'react';
import { Button } from './';
import { boolean } from '@storybook/addon-knobs';

export default {
    title: 'Components|Actions/Button',
    component: Button,
};

export const base = () => <Button>Button</Button>;
export const disabled = () => <Button isDisabled>Button</Button>;

export const primary = () => (
    <Button intent="primary" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const secondary = () => (
    <Button intent="secondary" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const danger = () => (
    <Button intent="danger" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const success = () => (
    <Button intent="success" onClick={() => alert(`You've clicked me`)}>
        Button
    </Button>
);

export const small = () => <Button size="sm">Button</Button>;
export const medium = () => <Button size="md">Button</Button>;
export const large = () => <Button size="lg">Button</Button>;

export const ghost = () => (
    <>
        <Button variant="ghost" intent="primary">
            Button
        </Button>
        <Button variant="ghost" intent="secondary">
            Button
        </Button>
        <Button variant="ghost" intent="danger">
            Button
        </Button>
        <Button variant="ghost" intent="success">
            Button
        </Button>
    </>
);
export const outline = () => (
    <>
        <Button variant="outline" intent="primary">
            Button
        </Button>
        <Button variant="outline" intent="secondary">
            Button
        </Button>
        <Button variant="outline" intent="danger">
            Button
        </Button>
        <Button variant="outline" intent="success">
            Button
        </Button>
    </>
);

export const link = () => (
    <>
        <Button variant="link" intent="primary">
            Button
        </Button>
        <Button variant="link" intent="secondary">
            Button
        </Button>
        <Button variant="link" intent="danger">
            Button
        </Button>
        <Button variant="link" intent="success">
            Button
        </Button>
    </>
);

export const asLinkTag = () => (
    <>
        <Button as="a" href="#" intent="primary">
            Button
        </Button>
        <Button as="a" href="#" intent="secondary">
            Button
        </Button>
        <Button as="a" href="#" intent="danger">
            Button
        </Button>
        <Button as="a" href="#" intent="success">
            Button
        </Button>
    </>
);

const LinkComponent = ({ children, href, ...props }) => (
    <a href={href} {...props}>
        {children}
    </a>
);

export const asComponent = () => (
    <>
        <Button as={LinkComponent} href="#" intent="primary">
            Button
        </Button>
    </>
);

export const icon = () => <Button icon={'chevron-down'}>Continue</Button>;
export const iconRight = () => (
    <Button iconRight={'chevron-down'}>Continue</Button>
);
// TODO: move this story to IconButton
export const iconOnly = () => <Button icon={'settings'}></Button>;

export const isLoading = () => {
    const isLoading = boolean('isLoading', false);
    return <Button isLoading={isLoading}>Button</Button>;
};

export const isFull = () => <Button isFull>Button</Button>;
