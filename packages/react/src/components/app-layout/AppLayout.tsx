import React from 'react';
import { Box } from '../../primitives/box';

export type AppLayoutProps = {};

type Props = AppLayoutProps;

const AppLayout: React.FC<Props> = ({ children }) => <Box>{children}</Box>;

export default AppLayout;
