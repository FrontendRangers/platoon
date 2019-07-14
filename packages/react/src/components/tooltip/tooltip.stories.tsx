import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './';

storiesOf('Components|Overlays.Tooltip', module).add('default', () => (
    <Tooltip>Tooltip component</Tooltip>
));
