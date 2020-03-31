import React from 'react';
import { Menu, MenuItem, MenuHeader } from './';

export default {
    title: 'Navigation/Menu',
};

export const Default = () => (
    <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuHeader>A header</MenuHeader>
        <MenuItem>Item 4</MenuItem>
        <MenuItem>Item 5</MenuItem>
        <MenuItem>Item 6</MenuItem>
    </Menu>
);
