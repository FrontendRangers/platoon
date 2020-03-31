import React from 'react';
import { NavBar, NavBarNav, NavBarBrand } from './';

export default {
    title: 'Navigation/Navbar',
};

export const Default = () => (
    <NavBar>
        <NavBarBrand>Brand</NavBarBrand>
        <NavBarNav>Navigation</NavBarNav>
    </NavBar>
);
