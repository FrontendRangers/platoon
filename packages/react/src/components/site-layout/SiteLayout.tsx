import { platoon } from '@platoon/system';
import React from 'react';

export type SiteLayoutProps = Record<string, unknown>;

type SiteLayoutComponent = React.FC<SiteLayoutProps>;

const SiteLayout: SiteLayoutComponent = ({ children, ...props }) => (
    <platoon.div {...props}>{children}</platoon.div>
);

export default SiteLayout;
