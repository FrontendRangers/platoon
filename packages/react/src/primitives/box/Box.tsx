import styled from 'styled-components';
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
    ColorProps &
    TypographyProps &
    LayoutProps &
    FlexboxProps &
    GridProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    ShadowProps;

export type BoxProps = SystemProps;

const Box = styled.div<BoxProps>(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
    compose(
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
    ),
);

Box.displayName = 'Box';

export default Box;
