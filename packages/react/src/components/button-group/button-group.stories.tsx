import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from './';

storiesOf('Components|Actions.Button Group', module).add('default', () => (
    <ButtonGroup>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
    </ButtonGroup>
));
