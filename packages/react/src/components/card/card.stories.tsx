import React from 'react';

import { Card } from './index';

export default {
    title: 'Components/Others/Card',
};

export const Default = () => <Card>Hello</Card>;

Default.story = {
    name: 'default',
};

export const WithAHeader = () => (
    <Card>
        <Card.Header>I&apos;m the header</Card.Header>
        Hello
    </Card>
);

WithAHeader.story = {
    name: 'with a header',
};

export const WithAFooter = () => (
    <Card>
        Hello
        <Card.Footer>I&apos;m the footer</Card.Footer>
    </Card>
);

WithAFooter.story = {
    name: 'with a footer',
};
