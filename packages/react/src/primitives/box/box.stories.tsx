import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Box,
    Bottom,
    BottomCenter,
    BottomLeft,
    BottomRight,
    MiddleLeft,
    MiddleRight,
    Left,
    Right,
    Top,
    TopCenter,
    TopLeft,
    TopRight,
} from './box';

storiesOf('Box', module)
    .add('Default', () => <Box>Hello</Box>)
    .add('Corners', () => (
        <Box>
            <div>Hello</div>
            <TopLeft>Top Left</TopLeft>
            <TopRight>Top Right</TopRight>
            <BottomLeft>Bottom Left</BottomLeft>
            <BottomRight>Bottom Right</BottomRight>
        </Box>
    ))
    .add('Sides', () => (
        <Box>
            Bob Hello
            <Top>Top</Top>
            <Bottom>Bottom</Bottom>
            <Left>Left</Left>
            <Right>Right</Right>
        </Box>
    ))
    .add('Centers', () => (
        <Box>
            Hello
            <TopCenter>Top Center</TopCenter>
            <BottomCenter>Bottom Center</BottomCenter>
            <MiddleLeft>Left Center</MiddleLeft>
            <MiddleRight>Right Center</MiddleRight>
        </Box>
    ));
