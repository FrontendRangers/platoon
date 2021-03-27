import React, { FC, useMemo } from 'react';
import { createContext } from '@platoon/utils';
import { useCheckboxGroup, UseCheckboxGroupProps } from './useCheckboxGroup';

interface CheckboxGroupContext {
    value: string;
}

const [
    CheckboxGroupProvider,
    useCheckboxGroupContext,
] = createContext<CheckboxGroupContext>();

export { useCheckboxGroupContext };

interface CheckboxGroupProps extends UseCheckboxGroupProps {
    size?: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
    const { children } = props;
    const { value = '' } = useCheckboxGroup();

    const group = useMemo(
        () => ({
            value,
        }),
        [value],
    );
    return (
        <CheckboxGroupProvider value={group}>{children}</CheckboxGroupProvider>
    );
};

export default CheckboxGroup;
