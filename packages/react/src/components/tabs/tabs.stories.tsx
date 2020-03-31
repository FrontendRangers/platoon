import React from 'react';
import { Tabs, TabsPane } from './';

export default {
    title: 'Others/Tabs',
};

export const Default = () => (
    <Tabs>
        <TabsPane title="tab 1">Tab 1 Content</TabsPane>
        <TabsPane title="tab 2">Tab 2 Content</TabsPane>
        <TabsPane title="tab 3">Tab 3 Content</TabsPane>
    </Tabs>
);
