import styled from 'styled-components';
import Text, { TextProps } from '../text';
import { themeGet } from '../../themes/theme';

export interface HeadingProps extends TextProps {
    as?: string;
}

const Heading = styled(Text)<HeadingProps>`
    ${({ as }) => themeGet(`textStyles[${as}]`)}
`;

Heading.defaultProps = {
    as: 'h2',
};

export default Heading;
