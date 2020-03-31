import React, { useState } from 'react';
import { Box } from '../../primitives/box';
import { CSSObject } from '@styled-system/css';

const tabLinkStyles: CSSObject = {
    flex: '1 1 auto',
};

export interface TabsLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive: boolean;
}

const TabLink: React.FC<TabsLinkProps> = ({ children, isActive, ...props }) => {
    const state = isActive ? `.isActive` : ``;
    return (
        <Box
            as="a"
            role="tab"
            sx={tabLinkStyles}
            tx={`tabs.tabLink${state}`}
            {...props}
        >
            {children}
        </Box>
    );
};

const tabStyles: CSSObject = {
    display: 'flex',
    cursor: 'pointer',
};

export type TabsTabProps = React.LiHTMLAttributes<HTMLLIElement>;

const Tab: React.FC<TabsTabProps> = ({ children, ...props }) => (
    <Box as="li" role="presentation" sx={tabStyles} tx="tabs.tab" {...props}>
        {children}
    </Box>
);

export interface TabsPaneProps {
    title: string | React.ReactNode;
}

export const TabsPane: React.FC<TabsPaneProps> = ({ children, ...props }) => (
    <Box tx="tabs.pane" {...props}>
        {children}
    </Box>
);

const tablistStyles: CSSObject = {
    display: 'flex',
    flexDirection: 'row',
};

export type TabsProps = {};

const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
    const panes = React.Children.toArray(children);
    const [activeTab, setActiveTab] = useState(0);
    return (
        <Box tx="tabs" {...props}>
            <Box as="ul" role="tablist" sx={tablistStyles}>
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
            </Box>
            <Box>{panes.filter((pane, index) => activeTab === index)}</Box>
        </Box>
    );
};

Tabs.displayName = 'Tabs';

export default Tabs;
