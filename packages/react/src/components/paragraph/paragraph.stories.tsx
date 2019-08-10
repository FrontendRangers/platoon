import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './';

storiesOf('Components|Typography.Paragraph', module)
    .add('default', () => <Paragraph>Paragraph component</Paragraph>)
    .add('large', () => (
        <Paragraph fontSize={'lg'}>Paragraph component</Paragraph>
    ));
