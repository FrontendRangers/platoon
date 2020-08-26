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

interface BaseBoxProps {
    theme?: Record<any, any>;
    as?: any;
}

export type BoxProps = BaseBoxProps &
    SystemProps &
    React.HTMLAttributes<Element>;

const Box = styled.div<BoxProps>(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
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

Box.displayName = 'Box';

export default Box;
