import React, { ComponentPropsWithoutRef, FC, forwardRef } from 'react';
import { platoon } from '@platoon/system';

const styles = {
    root: {
        display: 'grid',
        gridTemplate: 'auto 1fr auto / auto 1fr auto',
        width: '100vw',
        height: '100vh',
    },
    header: { gridColumn: '1 / 4' },
    body: { gridColumn: '2 / 4' },
    sidebar: { gridColumn: '1 / 2' },
    footer: { gridColumn: '1 / 4' },
};

export type AppLayoutHeaderProps = Record<string, unknown>;

const AppLayoutHeader: FC<AppLayoutHeaderProps> = ({ children, ...props }) => (
    <platoon.header {...styles.header} {...props}>
        {children}
    </platoon.header>
);

export type AppLayoutBodyProps = Record<string, unknown>;

const AppLayoutBody: FC<AppLayoutBodyProps> = ({ children, ...props }) => (
    <platoon.main {...styles.body} {...props}>
        {children}
    </platoon.main>
);

export type AppLayoutSidebarProps = Record<string, unknown>;

const AppLayoutSidebar: FC<AppLayoutSidebarProps> = ({
    children,
    ...props
}) => (
    <platoon.aside {...styles.sidebar} {...props}>
        {children}
    </platoon.aside>
);

export type AppLayoutFooterProps = Record<string, unknown>;

const AppLayoutFooter: FC<AppLayoutFooterProps> = ({ children, ...props }) => (
    <platoon.footer {...styles.footer} {...props}>
        {children}
    </platoon.footer>
);

export interface AppLayoutProps extends ComponentPropsWithoutRef<'div'> {
    id?: string;
}

const Component = forwardRef<HTMLDivElement, AppLayoutProps>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <platoon.div ref={ref} {...styles.root} {...rest}>
            {children}
        </platoon.div>
    );
});

Component.displayName = 'AppLayout';

export type AppLayoutComponent = typeof Component & {
    Header: typeof AppLayoutBody;
    Body: typeof AppLayoutBody;
    Sidebar: typeof AppLayoutSidebar;
    Footer: typeof AppLayoutSidebar;
};

const AppLayout = Component as AppLayoutComponent;

AppLayout.Header = AppLayoutHeader;
AppLayout.Body = AppLayoutBody;
AppLayout.Sidebar = AppLayoutSidebar;
AppLayout.Footer = AppLayoutFooter;

export default AppLayout;
