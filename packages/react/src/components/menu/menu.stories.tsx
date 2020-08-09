import React from 'react';
import { Menu } from './';

export default {
    title: 'Navigation/Menu',
    component: Menu,
};

export const Default = () => (
    <Menu>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Header>A header</Menu.Header>
        <Menu.Item>Item 4</Menu.Item>
        <Menu.Item>Item 5</Menu.Item>
        <Menu.Item>Item 6</Menu.Item>
    </Menu>
);
