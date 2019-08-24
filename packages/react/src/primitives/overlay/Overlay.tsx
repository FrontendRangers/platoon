import styled from 'styled-components';
import { Box } from '../box';

export interface OverlayProps {
    children?: any;
}

const Overlay = styled(Box)<OverlayProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(40, 68, 112, 0.8);
`;

export { Overlay };
