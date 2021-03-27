import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Media, MediaProps } from './';
import { Image, Heading, Paragraph } from '../../components';

export default { title: 'Primitives/Media', component: Media } as Meta;

export const Base: Story<MediaProps> = (args) => (
    <Media {...args}>
        <Media.Image>
            <Image src="https://via.placeholder.com/150" />
        </Media.Image>
        <Media.Title>
            <Heading>Title</Heading>
        </Media.Title>
        <Media.Content>
            <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                repellendus, similique ullam nesciunt, iure exercitationem eos
                architecto facere expedita tenetur ducimus. Aut corrupti unde ut
                quasi fugiat, accusantium ducimus explicabo.
            </Paragraph>
        </Media.Content>
    </Media>
);
