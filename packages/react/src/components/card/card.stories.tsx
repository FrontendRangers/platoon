import React from 'react';

import { Card } from './';
import { Image } from '../image';

export default {
    title: 'Data/Card',
    component: Card,
    subcomponents: {
        'Card Header': Card.Header,
        'Card Content': Card.Content,
        'Card Footer': Card.Footer,
    },
};

export const Default = () => <Card>Content</Card>;

export const withContent = () => (
    <Card>
        <Card.Content>Content</Card.Content>
    </Card>
);

export const withHeader = () => (
    <Card>
        <Card.Header>I&apos;m the header</Card.Header>
        <Card.Content>Content</Card.Content>
    </Card>
);

export const withAFooter = () => (
    <Card>
        <Card.Content>Content</Card.Content>
        <Card.Footer>I&apos;m the footer</Card.Footer>
    </Card>
);

export const withEverything = () => (
    <Card>
        <Card.Header>Header</Card.Header>
        <Card.Content>The content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
    </Card>
);

export const withImage = () => (
    <Card>
        <Image
            width="300px"
            height="200px"
            src="https://picsum.photos/300/200"
        />
        <Card.Content>Content</Card.Content>
    </Card>
);
