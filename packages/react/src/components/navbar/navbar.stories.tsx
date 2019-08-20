import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './';

storiesOf('Components|Navigation.Navbar', module).add('default', () => (
    <Navbar>Navbar component</Navbar>
));
