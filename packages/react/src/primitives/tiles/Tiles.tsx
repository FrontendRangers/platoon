import styled from 'styled-components';
import { Box, BoxProps } from '../box';

export type TilesProps = BoxProps & {
    spacing?: string;
};

const Tiles = styled(Box)<TilesProps>`
    display: grid;
    grid-gap: ${(props) => props.spacing};
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

Tiles.defaultProps = {
    spacing: '16px',
};

export default Tiles;
