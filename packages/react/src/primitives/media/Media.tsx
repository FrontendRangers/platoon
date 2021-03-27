import styled from 'styled-components';
import { Box, BoxProps } from '../box';

export type MediaImageProps = BoxProps;

export const MediaImage = styled(Box)<MediaImageProps>`
    grid-area: image;
`;

export type MediaTitleProps = BoxProps;

export const MediaTitle = styled(Box)<MediaTitleProps>`
    grid-area: title;
`;

export type MediaContentProps = BoxProps;

export const MediaContent = styled(Box)<MediaContentProps>`
    grid-area: content;
`;

export type MediaProps = BoxProps;

export const Media = styled(Box)<MediaProps>`
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: max-content max-content;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'image title'
        'image content';
`;
