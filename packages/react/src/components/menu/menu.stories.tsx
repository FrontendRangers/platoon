import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Menu } from './';
import { Button } from '../';
import { MenuProps } from './Menu';

export default {
    title: 'Navigation/Menu',
    component: Menu,
} as Meta;

export const Default: Story<MenuProps> = () => (
    <Menu>
        <Menu.Trigger>
            <Button>Menu</Button>
        </Menu.Trigger>
        <Menu.List>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
            <Menu.Header>A header</Menu.Header>
            <Menu.Item>Item 4</Menu.Item>
            <Menu.Item>Item 5</Menu.Item>
            <Menu.Divider />
            <Menu.Item>Item 6</Menu.Item>
        </Menu.List>
    </Menu>
);
