import styled from 'styled-components';
import { textStyle, TextStyleProps } from 'styled-system';
import { Box, styleFns, SystemProps } from '../../primitives/box';

type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type HeadingProps = SystemProps &
    TextStyleProps & {
        as?: HeadingAs;
    };

const Heading = styled(Box)<HeadingProps>(textStyle, styleFns);

Heading.displayName = 'Heading';

Heading.defaultProps = {
    as: 'h2',
    textStyle: 'heading2',
};

export default Heading;
