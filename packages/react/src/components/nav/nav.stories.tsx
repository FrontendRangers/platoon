import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Nav } from './';
import { NavItem, NavProps } from './Nav';

export default {
    title: 'Navigation/Nav',
    component: Nav,
    subcomponents: {
        'Nav Item': NavItem,
    },
} as Meta;

export const Default: Story<NavProps> = (args) => (
    <Nav {...args}>
        <Nav.Item>Item 1</Nav.Item>
        <Nav.Item>Item 2</Nav.Item>
        <Nav.Item>Item 3</Nav.Item>
        <Nav.Item>Item 4</Nav.Item>
        <Nav.Item>Item 5</Nav.Item>
        <Nav.Item>Item 6</Nav.Item>
    </Nav>
);
