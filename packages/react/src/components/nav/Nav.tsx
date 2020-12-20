import { platoon } from '@platoon/system';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Flex } from '../../primitives';

export type NavItemProps = Record<string, any>;

export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
    ({ children, ...props }, ref) => (
        <platoon.li ref={ref} {...props}>
            {children}
        </platoon.li>
    ),
);

NavItem.displayName = 'Nav.Item';

type NavVariant = 'base' | 'tab' | 'pill';

export interface NavProps extends ComponentPropsWithoutRef<'div'> {
    variant?: NavVariant;
}

const navDefaultProps: NavProps = {
    variant: 'base',
};

const Component = forwardRef<HTMLDivElement, NavProps>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <Flex as="nav" ref={ref} flexWrap="nowrap" {...rest}>
            <Flex as="ul">{children}</Flex>
        </Flex>
    );
});

Component.displayName = 'Nav';
Component.defaultProps = navDefaultProps;

const Nav = Object.assign(Component, { Item: NavItem });

export default Nav;
