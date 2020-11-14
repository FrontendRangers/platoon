import React from 'react';
import { Box } from '../../primitives/box';

export type AppLayoutProps = Record<string, unknown>;

type AppLayoutComponent = React.FC<AppLayoutProps>;

const AppLayout: AppLayoutComponent = ({ children }) => <Box>{children}</Box>;

export default AppLayout;
