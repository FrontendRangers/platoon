import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Tabs } from './';
import { TabsPane, TabsProps } from './Tabs';

export default {
    title: 'Data/Tabs',
    component: Tabs,
    subcomponents: { Pane: TabsPane },
} as Meta;

export const Default: Story<TabsProps> = (args) => (
    <Tabs {...args}>
        <Tabs.Pane title="tab 1">Tab 1 Content</Tabs.Pane>
        <Tabs.Pane title="tab 2">Tab 2 Content</Tabs.Pane>
        <Tabs.Pane title="tab 3">Tab 3 Content</Tabs.Pane>
    </Tabs>
);
