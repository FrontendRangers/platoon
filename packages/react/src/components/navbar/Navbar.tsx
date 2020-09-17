import React from 'react';
import { Box } from '../../primitives/box';

const NavBarBrand: React.FC<any> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

const NavBarNav: React.FC<any> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export type NavbarProps = Record<string, unknown>;

interface NavBarComponent extends React.FC<NavbarProps> {
    Brand: typeof NavBarBrand;
    Nav: typeof NavBarNav;
}

const NavBar: NavBarComponent = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

NavBar.displayName = 'NavBar';

NavBar.Brand = NavBarBrand;
NavBar.Nav = NavBarNav;

export default NavBar;
