import React, { useState, useEffect, forwardRef } from 'react';
import { Input, InputProps } from '../input';
import { Chip, ChipGroup } from '../chip';
import { IconButton } from '../button';

export type ChipInputProps = InputProps;

type ChipInputComponent = React.ForwardRefExoticComponent<
    ChipInputProps & React.RefAttributes<HTMLInputElement>
>;

const ChipInput: ChipInputComponent = forwardRef(
    ({ children, ...props }, ref) => {
        const [values, setValues] = useState<string[]>([]);

        const [hasValues, setHasValues] = useState<boolean>(false);

        useEffect(() => {
            setHasValues(values.length >= 1);
        }, [values]);

        const addValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                if (!event.currentTarget.value) return;
                setValues([...values, event.currentTarget.value]);
                event.currentTarget.value = '';
            }
        };

        const removeValue = (valueToRemove) => {
            setValues(values.filter((value) => value !== valueToRemove));
        };

        const resetValues = () => setValues([]);

        const badges =
            hasValues &&
            values.map((value, idx) => (
                <Chip key={`chip-${idx}`} onDismiss={() => removeValue(value)}>
                    {value}
                </Chip>
            ));

        return (
            <Input
                ref={ref}
                onKeyDown={addValue}
                addonLeft={<ChipGroup>{badges}</ChipGroup>}
                addonRight={hasValues && <IconButton onClick={resetValues} />}
                {...props}
            >
                {children}
            </Input>
        );
    },
);

ChipInput.displayName = 'ChipInput';

export default ChipInput;
