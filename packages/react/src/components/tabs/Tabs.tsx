import { platoon } from '@platoon/system';
import React, { forwardRef, isValidElement, useState } from 'react';
import { Nav, NavItem } from '../nav';

export type TabsLinkProps = {
    isActive: boolean;
};

const TabLink = platoon('button', {
    attrs: () => ({
        role: 'tab',
    }),
});

export type TabsTabProps = Record<string, unknown>;

const Tab = platoon(NavItem, {
    attrs: () => ({
        role: 'presentation',
    }),
});

const TabList = platoon(Nav, { role: 'tablist' });

export interface TabsPaneProps {
    title: string | React.ReactNode;
}

export const TabsPane = platoon('div');

const TabsPaneContainer = platoon('div');

export type TabsProps = Record<string, unknown>;

const TabsContainer = platoon('div');

const Component = forwardRef<HTMLDivElement, TabsProps>(
    ({ children, ...props }, ref) => {
        const panes = React.Children.toArray(children).filter((child) =>
            isValidElement(child),
        );
        const [activeTab, setActiveTab] = useState(0);
        return (
            <TabsContainer ref={ref} {...props}>
                <TabList>
                    {panes.map((pane: any, index) => (
                        <Tab
                            key={`tab-${index}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <TabLink isActive={activeTab === index}>
                                {pane.props.title}
                            </TabLink>
                        </Tab>
                    ))}
                </TabList>
                <TabsPaneContainer>
                    {panes.filter((_pane, index) => activeTab === index)}
                </TabsPaneContainer>
            </TabsContainer>
        );
    },
);

Component.displayName = 'Tabs';

const Tabs = Object.assign(Component, { Pane: TabsPane });

export default Tabs;
