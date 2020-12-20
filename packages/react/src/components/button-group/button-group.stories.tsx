import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ButtonGroup, ButtonGroupProps } from '.';
import { Button } from '../button';

export default {
    title: 'Actions/Button Group',
    component: ButtonGroup,
    subcomponents: { Button },
} as Meta;

export const Default: Story<ButtonGroupProps> = (args) => (
    <ButtonGroup {...args}>
        <Button>Button</Button>
        <Button>A Button</Button>
        <Button>Another Button</Button>
    </ButtonGroup>
);
