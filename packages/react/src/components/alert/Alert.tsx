import { platoon } from '@platoon/system';
import React, { FC } from 'react';
import { DismissButton } from '../button';

const AlertTitle: FC = (props) => <platoon.div {...props} />;

const AlertDescription: FC = (props) => <platoon.div {...props} />;

export interface AlertProps {
    isDismissible?: boolean;
}

const Component: FC<AlertProps> = (props) => {
    const { children, isDismissible, ...rest } = props;
    return (
        <platoon.div {...rest}>
            {isDismissible && <DismissButton variant="ghost" />}
            {children}
        </platoon.div>
    );
};

const Alert = Object.assign(Component, {
    Title: AlertTitle,
    Description: AlertDescription,
});

Alert.defaultProps = {
    isDismissible: false,
};

export default Alert;
