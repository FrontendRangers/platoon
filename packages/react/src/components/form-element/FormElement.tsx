import React, { forwardRef } from 'react';
import { platoon } from '@platoon/system';
import { Label } from '../label';
import { SpaceProps } from 'styled-system';

export type FormElementProps = SpaceProps;

const FormElementLabel = platoon(Label);

const FormElementHint = platoon('div', { textStyle: 'hint' });

const FormElementError = platoon('div', { textStyle: 'hint' });

interface FormElementComposition {
    Label: typeof FormElementLabel;
    Hint: typeof FormElementHint;
    Error: typeof FormElementError;
}

const Component = forwardRef<HTMLDivElement, FormElementProps>(
    ({ children, ...props }) => (
        <platoon.div {...props}>{children}</platoon.div>
    ),
);

Component.displayName = 'FormElement';

const FormElement = Component as typeof Component & FormElementComposition;

FormElement.Label = FormElementLabel;
FormElement.Hint = FormElementHint;
FormElement.Error = FormElementError;

export default FormElement;
