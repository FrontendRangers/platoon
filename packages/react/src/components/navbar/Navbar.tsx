import { Box, BoxProps } from '../../primitives/box';
import React, { forwardRef } from 'react';
import { CSSObject } from '@styled-system/css';

const NavBarBrand: React.FC<{}> = ({ children, ...props }) => (
    <Box tx="navbars.brand" {...props}>
        {children}
    </Box>
);

const NavBarNav: React.FC<{}> = ({ children, ...props }) => (
    <Box tx="navbars.nav" {...props}>
        {children}
    </Box>
);

export type NavbarProps = BoxProps;

export type Props = NavbarProps;

const styles: CSSObject = {
    display: 'flex',
    flexDirection: 'row',
};

const NavBar: React.FC<Props> = forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <Box sx={styles} ref={forwardedRef} tx="navbars" {...props}>
            {children}
        </Box>
    ),
);

NavBar.displayName = 'NavBar';

export { NavBar, NavBarBrand, NavBarNav };
