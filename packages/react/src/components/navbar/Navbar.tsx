import { platoon } from '@platoon/system';
import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { Flex } from '../../primitives';

const NavBarBrand: React.FC<any> = ({ children, ...props }) => (
    <platoon.div {...props}>{children}</platoon.div>
);

const NavBarNav: React.FC<any> = ({ children, ...props }) => (
    <platoon.div {...props}>{children}</platoon.div>
);

export type NavBarOptions = Record<string, unknown>;

export type NavBarProps = NavBarOptions & ComponentPropsWithRef<'div'>;

const Component = forwardRef<HTMLDivElement, NavBarProps>(
    ({ children, ...props }, ref) => (
        <Flex ref={ref} {...props}>
            {children}
        </Flex>
    ),
);

Component.displayName = 'NavBar';

const NavBar = Object.assign(Component, { Brand: NavBarBrand, Nav: NavBarNav });

export default NavBar;
