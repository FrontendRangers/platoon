import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavBar } from './';
import { Nav } from '../nav';
import { NavBarProps } from './Navbar';

export default {
    title: 'Navigation/Navbar',
    component: NavBar,
} as Meta;

export const Default: Story<NavBarProps> = (args) => (
    <NavBar {...args}>
        <NavBar.Brand>Platoon</NavBar.Brand>
        <NavBar.Nav>
            <Nav>
                <Nav.Item>Link 1</Nav.Item>
                <Nav.Item>Link 2</Nav.Item>
                <Nav.Item>Link 3</Nav.Item>
            </Nav>
        </NavBar.Nav>
    </NavBar>
);
