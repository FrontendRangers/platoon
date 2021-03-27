import { HTMLAttributes } from 'react';
import styled from '@xstyled/styled-components';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    textStyle?: string;
};

const Heading = styled.h2<HeadingProps>``;

Heading.displayName = 'Heading';

Heading.defaultProps = {
    textStyle: 'heading',
};

export default Heading;
