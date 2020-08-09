import React from 'react';
import { Tabs } from './';

export default {
    title: 'Data/Tabs',
    component: Tabs,
};

export const Default = () => (
    <Tabs>
        <Tabs.Pane title="tab 1">Tab 1 Content</Tabs.Pane>
        <Tabs.Pane title="tab 2">Tab 2 Content</Tabs.Pane>
        <Tabs.Pane title="tab 3">Tab 3 Content</Tabs.Pane>
    </Tabs>
);
