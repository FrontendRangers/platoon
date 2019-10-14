import styled from 'styled-components';
import {
    SpaceProps,
    space,
    ColorProps,
    color,
    layout,
    LayoutProps,
    flexbox,
    FlexboxProps,
    typography,
    TypographyProps,
    border,
    BorderProps,
    background,
    BackgroundProps,
    position,
    PositionProps,
    system,
    compose,
} from 'styled-system';

interface ShapeProps {
    shape?: string;
}

export interface BoxProps
    extends SpaceProps,
        ColorProps,
        LayoutProps,
        FlexboxProps,
        TypographyProps,
        BorderProps,
        BackgroundProps,
        PositionProps,
        ShapeProps {
    children?: React.ReactNode;
}

const shape = system({
    shape: {
        property: 'borderRadius',
        scale: 'shapes',
    },
});

const Box = styled('div')<BoxProps>(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
    compose(
        space,
        color,
        layout,
        flexbox,
        typography,
        border,
        background,
        position,
        shape,
    ),
);

Box.displayName = 'Box';

export { Box };
