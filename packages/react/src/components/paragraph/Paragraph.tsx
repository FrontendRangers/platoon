import styled from 'styled-components';
import { Box, BoxProps } from '../../primitives';

export type ParagraphProps = BoxProps & {
    textStyle?: string;
};

const Paragraph = styled(Box)<ParagraphProps>``;

Paragraph.displayName = 'Paragraph';

Paragraph.defaultProps = {
    textStyle: 'body',
};

export default Paragraph;
