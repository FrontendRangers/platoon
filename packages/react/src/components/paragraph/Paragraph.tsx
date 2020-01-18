import styled from 'styled-components';
import { Text } from '../text';
import { themed } from '../../themes/helpers';
import { FontSizeProps, fontSize } from 'styled-system';

export type ParagraphProps = FontSizeProps;

const Paragraph = styled(Text).attrs(() => ({ as: 'p' }))<ParagraphProps>`
    ${themed('Paragraph')}
    ${fontSize}
`;

export { Paragraph };
