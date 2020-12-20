import styled from 'styled-components';
import { textStyle, TextStyleProps } from 'styled-system';
import { Box, styleFns, SystemProps } from '../../primitives/box';

export type TextProps = SystemProps &
    TextStyleProps & {
        as?: 'span' | 'p' | 'caption' | 'label';
    };

const Text = styled(Box)<TextProps>(textStyle, styleFns);

Text.displayName = 'Text';

Text.defaultProps = {
    as: 'span',
    textStyle: 'body',
};

export default Text;
