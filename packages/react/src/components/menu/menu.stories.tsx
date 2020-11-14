import React from 'react';
import { Menu } from './';
import { Button } from '../';

export default {
    title: 'Navigation/Menu',
    component: Menu,
    argTypes: { onClick: { action: 'clicked' } },
};

export const Default = ({ onClick }): React.ReactElement => (
    <Menu>
        <Menu.Trigger>
            <Button>Menu</Button>
        </Menu.Trigger>
        <Menu.List>
            <Menu.Item onClick={onClick}>Item 1</Menu.Item>
            <Menu.Item onClick={onClick}>Item 2</Menu.Item>
            <Menu.Item onClick={onClick}>Item 3</Menu.Item>
            <Menu.Header>A header</Menu.Header>
            <Menu.Item onClick={onClick}>Item 4</Menu.Item>
            <Menu.Item onClick={onClick}>Item 5</Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={onClick}>Item 6</Menu.Item>
        </Menu.List>
    </Menu>
);
