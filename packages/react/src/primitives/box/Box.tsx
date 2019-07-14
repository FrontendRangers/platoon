import styled from 'styled-components';
import { SpaceProps, space, ColorProps, color } from 'styled-system';

export interface BoxProps extends SpaceProps, ColorProps {
    children?: React.ReactNode;
}

const Box = styled('div')<BoxProps>`
    ${space};
    ${color};
`;

export default Box;
