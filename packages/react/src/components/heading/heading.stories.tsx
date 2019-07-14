import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './';

storiesOf('Components|Typography.Heading', module).add('default', () => (
    <Heading>I'm an heading</Heading>
));
