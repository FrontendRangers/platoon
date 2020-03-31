import React, { forwardRef } from 'react';
import { Box } from '../../primitives/box';

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption: React.FC<SelectOptionProps> = ({ children, ...props }) => (
    <Box as="option" {...props}>
        {children}
    </Box>
);

SelectOption.displayName = 'Select.Option';

export type SelectOptionGroupProps = React.OptgroupHTMLAttributes<
    HTMLOptGroupElement
>;

const SelectOptionGroup: React.FC<SelectOptionGroupProps> = ({
    children,
    ...props
}) => (
    <Box as="optiongroup" {...props}>
        {children}
    </Box>
);

SelectOptionGroup.displayName = 'Select.OptionGroup';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = forwardRef(
    ({ children, ...props }, ref: React.RefObject<HTMLSelectElement>) => (
        <Box>
            <Box as="select" ref={ref} {...props}>
                {children}
            </Box>
        </Box>
    ),
);

Select.displayName = 'Select';

export { Select, SelectOption, SelectOptionGroup };
