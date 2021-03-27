import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from '../box';

export type StackProps = BoxProps & {
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

const Stack = styled(Box)<StackProps>`
    display: flex;
    ${orientationStyles};
`;

Stack.defaultProps = {
    orientation: 'vertical',
};

export default Stack;
