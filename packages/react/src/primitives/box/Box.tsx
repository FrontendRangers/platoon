import styled, { css } from 'styled-components';
import {
    SpaceProps,
    space,
    ColorProps,
    color,
    TypographyProps,
    typography,
    LayoutProps,
    layout,
    FlexboxProps,
    flexbox,
    GridProps,
    grid,
    BackgroundProps,
    background,
    BorderProps,
    border,
    PositionProps,
    position,
    ShadowProps,
    shadow,
    compose,
} from 'styled-system';

export type SystemProps = SpaceProps &
    Omit<ColorProps, 'color'> &
    TypographyProps &
    LayoutProps &
    FlexboxProps &
    GridProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    ShadowProps;

export const styleFns = compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
);

export const sxFn = (props: any): any => {
    if (!props.sx) {
        return;
    }
    return css`
        ${props.sx}
    `;
};

export type BoxProps = SystemProps & {
    sx?: any;
};

const Box = styled.div<BoxProps>`
    box-sizing: border-box;
    min-width: 0;
    ${sxFn};
    && {
        ${styleFns}
    }
`;

Box.displayName = 'Box';

export default Box;
