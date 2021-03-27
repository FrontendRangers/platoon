import styled from 'styled-components';
import { Box, BoxProps } from '../box';

export type FlexProps = BoxProps;

const Flex = styled(Box)<FlexProps>`
    display: flex;
`;

Flex.displayName = 'Flex';

export default Flex;
