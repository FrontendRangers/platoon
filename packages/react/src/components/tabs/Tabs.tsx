import React, { useState } from 'react';
import styled from 'styled-components';

export interface TabsLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    isActive: boolean;
}

const TabLink = styled.a.attrs(() => ({ role: 'tab' }))<TabsLinkProps>({});

export type TabsTabProps = React.HTMLAttributes<HTMLLIElement>;

const Tab = styled.li.attrs(() => ({ role: 'presentation' }))<TabsTabProps>({});

const TabList = styled.ul.attrs(() => ({ role: 'tablist' }))<TabsTabProps>({});

export interface TabsPaneProps {
    title: string | React.ReactNode;
}

const TabsPane = styled.div<TabsPaneProps>({});

const TabsPaneContainer = styled.div({});

export type TabsProps = Record<string, unknown>;

const TabsContainer = styled.div<TabsProps>({});

interface TabsComponent extends React.FC<TabsProps> {
    Pane: typeof TabsPane;
}

const Tabs: TabsComponent = ({ children, ...props }) => {
    const panes = React.Children.toArray(children);
    const [activeTab, setActiveTab] = useState(0);
    return (
        <TabsContainer {...props}>
            <TabList>
                {panes.map((pane: React.ReactElement, index) => (
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
                {panes.filter((pane, index) => activeTab === index)}
            </TabsPaneContainer>
        </TabsContainer>
    );
};

Tabs.displayName = 'Tabs';

Tabs.Pane = TabsPane;

export default Tabs;
