import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Card, CardHeader, CardFooter, CardContent, CardProps } from './';
import { Image } from '../image';

export default {
    title: 'Data/Card',
    component: Card,
    subcomponents: {
        'Card Header': CardHeader,
        'Card Content': CardContent,
        'Card Footer': CardFooter,
    },
} as Meta;

export const Default: Story<CardProps> = (args) => (
    <Card {...args}>Content</Card>
);

export const withContent: Story<CardProps> = (args) => (
    <Card {...args}>
        <Card.Content>Content</Card.Content>
    </Card>
);

export const withHeader: Story<CardProps> = (args) => (
    <Card {...args}>
        <Card.Header>I&apos;m the header</Card.Header>
        <Card.Content>Content</Card.Content>
    </Card>
);

export const withAFooter: Story<CardProps> = (args) => (
    <Card {...args}>
        <Card.Content>Content</Card.Content>
        <Card.Footer>I&apos;m the footer</Card.Footer>
    </Card>
);

export const withEverything: Story<CardProps> = (args) => (
    <Card {...args}>
        <Card.Header>Header</Card.Header>
        <Card.Content>The content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
    </Card>
);

export const withImage: Story<CardProps> = (args) => (
    <Card {...args}>
        <Image width="300px" height="200px" src="/image1.jpg" />
        <Card.Content>Content</Card.Content>
    </Card>
);
