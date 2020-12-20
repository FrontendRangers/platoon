import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SiteLayout } from './';
import { SiteLayoutProps } from './SiteLayout';

export default {
    title: 'Layout/Site Layout',
    component: SiteLayout,
} as Meta;

export const Default: Story<SiteLayoutProps> = (args) => (
    <SiteLayout {...args}>Site Layout component</SiteLayout>
);
