import styled from 'styled-components';
import { SpaceProps, space, ColorProps, color, compose } from 'styled-system';

export interface BoxProps extends SpaceProps, ColorProps {
    children?: React.ReactNode;
}

const Box = styled('div')<BoxProps>`
    ${compose(
        space,
        color,
    )}
`;

export { Box };
