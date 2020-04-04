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

export const variant = ({ scale, prop = 'variant', variants = {} }) => {
    const sx = (value, scale, props) => css(get(scale, value))(props.theme);
    sx.scale = scale;
    sx.defaults = variants;
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

export interface BoxProps extends SystemProps {
    /** Define which element to use to render the component */
    as?: any;
    base?: Record<any, any>;
    sx?: Record<any, any>;
    vx?: Record<any, any>;
    tx?: string;
    theme?: Record<any, any>;
    ref?: React.Ref<any>;
}

type Props = BoxProps & React.HTMLAttributes<any> & React.RefAttributes<any>;

// Themeable styles
const sx = ({ sx, theme }) => css(sx)(theme);

const base = ({ theme, tx }) => css(get(theme, tx))(theme);

// Variation styles
const vx = ({ vx = [], tx = 'variants' }: { vx: string[]; tx: string }) => {
    const scalePrefix = `${tx}.`;

    return vx.map((v: string) =>
        variant({
            prop: v,
            scale: scalePrefix + v,
            variants: {},
        }),
    );
};

const Box = styled.div<Props>(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
    base,
    vx,
    sx,
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

export { Box };
