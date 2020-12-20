import React from 'react';
import { Meta, Story } from '@storybook/react';

import { AppLayout, AppLayoutProps } from './';
import { NavBar } from '../navbar';
import { Nav } from '../nav';

export default {
    title: 'Layout/App Layout',
    component: AppLayout,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

export const Default: Story<AppLayoutProps> = (args) => (
    <AppLayout {...args}>
        <AppLayout.Body>Main content</AppLayout.Body>
    </AppLayout>
);

export const withSidebar: Story<AppLayoutProps> = () => (
    <AppLayout>
        <AppLayout.Body>Main content</AppLayout.Body>
        <AppLayout.Sidebar>Sidebar</AppLayout.Sidebar>
    </AppLayout>
);

export const HolyGrail: Story<AppLayoutProps> = (args) => (
    <AppLayout {...args}>
        <AppLayout.Header>
            <NavBar>
                <NavBar.Brand>Platoon</NavBar.Brand>
                <NavBar.Nav>
                    <Nav>
                        <Nav.Item>Link 1</Nav.Item>
                    </Nav>
                </NavBar.Nav>
            </NavBar>
        </AppLayout.Header>
        <AppLayout.Body>Main content</AppLayout.Body>
        <AppLayout.Sidebar>Sidebar</AppLayout.Sidebar>
        <AppLayout.Footer>Footer</AppLayout.Footer>
    </AppLayout>
);
