import React, { FC } from 'react';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button, DismissButton } from '../button';
import { Icon } from '../icon';
import { ButtonGroup } from '../button-group';
import { platoon } from '@platoon/system';
import { Portal } from '../../primitives/portal';
import { SystemStyleObject } from '@styled-system/css';

export interface ToastProps {
    title?: string;
    description: string;
}

const styles: SystemStyleObject = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    border: '2px solid #cecece',
    borderRadius: '6px',
    padding: '16px',
    margin: '16px',
};

const Toast: FC<ToastProps> = (props) => {
    const { title, description, ...rest } = props;
    return (
        <Portal>
            <platoon.div sx={styles} {...rest}>
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
        </Portal>
    );
};

export default Toast;
