import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './';

storiesOf('Components|Typography.Text', module).add('default', () => (
    <Text>I'm some text</Text>
));
