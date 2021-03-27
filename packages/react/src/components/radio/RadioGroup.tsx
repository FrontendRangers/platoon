import React, { FC, useMemo } from 'react';
import { createContext } from '@platoon/utils';

interface RadioGroupContext {
    value: string;
}

const [
    RadioGroupProvider,
    useRadioGroupContext,
] = createContext<RadioGroupContext>();

export { useRadioGroupContext };

interface RadioGroupProps {
    size?: string;
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
    const { children } = props;
    const value = 'value';

    const group = useMemo(
        () => ({
            value,
        }),
        [value],
    );
    return <RadioGroupProvider value={group}>{children}</RadioGroupProvider>;
};

export default RadioGroup;
