import React from 'react';
import { forwardRef, platoon } from '@platoon/system';
import { Label } from '../label';
import { BoxProps } from '../../primitives';

export type FormElementProps = BoxProps;

const FormElementLabel = platoon(Label);

const FormElementDescription = platoon('div', { textStyle: 'hint' });

const FormElementHint = platoon('div', { textStyle: 'hint' });

const FormElementError = platoon('div', { textStyle: 'hint' });

const Component = forwardRef<FormElementProps, 'div'>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <platoon.div {...rest} ref={ref}>
            {children}
        </platoon.div>
    );
});

Component.displayName = 'FormElement';

const FormElement = Object.assign(Component, {
    Label: FormElementLabel,
    Description: FormElementDescription,
    Hint: FormElementHint,
    Error: FormElementError,
});

export default FormElement;
