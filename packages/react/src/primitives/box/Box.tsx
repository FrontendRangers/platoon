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
import css from '@styled-system/css';

// Move variant to another file
import { get, createParser } from '@styled-system/core';

export const variant = ({ scale, prop = 'variant', variants = {} }): any => {
    const sx = (value, scale, props) => css(get(scale, value))(props.theme);
    sx.scale = scale;
    sx.defaults = variants;
    const config = {
        [prop]: sx,
    };
    const parser = createParser(config);
    return parser;
};

export const state = ({ scale, prop = 'variant', states = {} }): any => {
    const sx = (value, scale, props) => css(get(scale, value))(props.theme);
    sx.scale = scale;
    sx.defaults = states;
    const config = {
        [prop]: sx,
    };
    const parser = createParser(config);
    return parser;
};

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
    sx?: Record<any, any>;
    theme?: Record<any, any>;
    as?: any;
}

export type BoxProps = BaseBoxProps &
    SystemProps &
    React.HTMLAttributes<HTMLElement>;

// Themeable styles
const componentStyles = ({ sx, theme }: BoxProps) => css(sx)(theme);

const Box = styled.div<BoxProps>(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
    componentStyles,
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
