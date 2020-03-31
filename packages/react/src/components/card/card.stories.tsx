import React from 'react';

import { Card, CardContent, CardHeader, CardFooter } from './';
import { Image } from '../image';

export default {
    title: 'Others/Card',
    component: Card,
};

export const Default = () => <Card>Content</Card>;

export const withContent = () => (
    <Card>
        <CardContent>Content</CardContent>
    </Card>
);

export const withHeader = () => (
    <Card>
        <CardHeader>I&apos;m the header</CardHeader>
        <CardContent>Content</CardContent>
    </Card>
);

export const withAFooter = () => (
    <Card>
        <CardContent>Content</CardContent>
        <CardFooter>I&apos;m the footer</CardFooter>
    </Card>
);

export const withImage = () => (
    <Card>
        <Image
            width="300px"
            height="200px"
            src="https://picsum.photos/300/200"
        ></Image>
        <CardContent>Content</CardContent>
    </Card>
);
