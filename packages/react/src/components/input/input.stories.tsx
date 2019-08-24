import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from './';

storiesOf('Components|Forms.Input', module)
    .add('default', () => <Input />)
    .add('with a placeholder', () => <Input placeholder={'Fill me'} />);
