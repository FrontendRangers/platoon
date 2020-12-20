import React, { FC } from 'react';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button, DismissButton } from '../button';
import { Icon } from '../icon';
import { ButtonGroup } from '../button-group';
import { platoon } from '@platoon/system';

export interface ToastProps {
    title?: string;
    description: string;
}

const Toast: FC<ToastProps> = (props) => {
    const { title, description, ...rest } = props;
    return (
        <platoon.div {...rest}>
            <platoon.div>
                <Icon name="heart" />
                {title && <Heading>{title}</Heading>}
                <Paragraph>{description}</Paragraph>
            </platoon.div>
            <platoon.div>
                <DismissButton variant="ghost" />
            </platoon.div>
            <ButtonGroup>
                <Button variant="ghost">Cancel</Button>
                <Button variant="ghost">Confirm</Button>
            </ButtonGroup>
        </platoon.div>
    );
};

export default Toast;
