import React from 'react';
import { Box, BoxProps } from '../../primitives/box';

export type BreadcrumbProps = {};

type Props = BreadcrumbProps & BoxProps;

const Breadcrumb: React.FC<Props> = () => <Box>Home / About Us</Box>;

export default Breadcrumb;
