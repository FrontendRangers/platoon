import styled from 'styled-components';
import Text, { TextProps } from '../text';

export interface HeadingProps extends TextProps {}

const Heading = styled(Text)<HeadingProps>``;

Heading.defaultProps = {
    as: 'h2',
};

export default Heading;
