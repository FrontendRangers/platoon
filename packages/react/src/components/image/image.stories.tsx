import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Image } from '.';
import { ImageProps } from './Image';

export default {
    title: 'Medias/Image',
    component: Image,
    argTypes: {
        src: {
            control: {
                type: 'select',
                options: {
                    image1: '/image1.jpg',
                    image2: '/image2.jpg',
                    image3: '/image3.jpg',
                    imageMissing: '/image-not-found.jpg',
                },
            },
        },
    },
    args: {
        src: '/image2.jpg',
    },
} as Meta;

export const Default: Story<ImageProps> = (args) => <Image {...args} />;
