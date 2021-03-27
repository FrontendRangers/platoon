import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from '../box';

export type LevelProps = BoxProps & {
    orientation?: 'vertical' | 'horizontal';
};

const orientationStyles = variant({
    prop: 'orientation',
    variants: {
        vertical: {
            flexDirection: 'column',
        },
        horizontal: {
            flexDirection: 'row',
        },
    },
});

const Level = styled(Box)<LevelProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${orientationStyles};
`;

Level.defaultProps = {
    orientation: 'horizontal',
};

export default Level;
