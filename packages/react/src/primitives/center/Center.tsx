import styled from 'styled-components';
import { Box, BoxProps } from '../box';

export type CenterProps = BoxProps;

const Center = styled(Box)<CenterProps>`
    display: grid;
    place-items: center;
`;

export default Center;
