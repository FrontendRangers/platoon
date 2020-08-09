import React from 'react';
import { NavBar } from './';

export default {
    title: 'Navigation/Navbar',
    component: NavBar,
};

export const Default = () => (
    <NavBar>
        <NavBar.Brand>Brand</NavBar.Brand>
        <NavBar.Nav>Navigation</NavBar.Nav>
    </NavBar>
);
