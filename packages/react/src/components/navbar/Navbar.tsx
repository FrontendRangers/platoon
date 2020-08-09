import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

const NavBarBrand: React.FC<any> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

const NavBarNav: React.FC<any> = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

export type NavbarProps = BoxProps;

type Props = NavbarProps;

interface NavBarComponent extends React.FC<Props> {
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
