import React from 'react';
import { ButtonGroup } from './';
import { Button } from '../button';

export default {
    title: 'Actions/Button/Button Group',
    component: ButtonGroup,
    subcomponents: { Button },
};

export const Default = () => (
    <ButtonGroup>
        <Button>Button</Button>
        <Button>A Button</Button>
        <Button>Another Button</Button>
    </ButtonGroup>
);
