import styled from 'styled-components';
import Text from '../text';

export interface ParagraphProps {}

const Paragraph = styled(Text).attrs(() => ({ as: 'p' }))<ParagraphProps>``;

export default Paragraph;
