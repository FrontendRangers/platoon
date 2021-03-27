import { HTMLAttributes } from 'react';
import styled from '@xstyled/styled-components';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
    textStyle?: string;
};

const Paragraph = styled.h2<ParagraphProps>``;

Paragraph.displayName = 'Paragraph';

Paragraph.defaultProps = {
    textStyle: 'body',
};

export default Paragraph;
