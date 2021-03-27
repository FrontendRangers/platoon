/* eslint-disable import/export */
import {
    Media as MediaComponent,
    MediaContent,
    MediaImage,
    MediaTitle,
} from './Media';

export * from './Media';
export const Media = Object.assign(MediaComponent, {
    Image: MediaImage,
    Title: MediaTitle,
    Content: MediaContent,
});
