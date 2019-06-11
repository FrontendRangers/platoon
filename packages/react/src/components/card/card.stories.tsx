import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';

storiesOf('Components|Card', module)
    .add('default', () => <Card>Hello</Card>)
    .add('with a footer', () => (
        <Card>
            Hello
            <Card.Footer>I'm the footer</Card.Footer>
        </Card>
    ));
