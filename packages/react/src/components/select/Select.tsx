import React, { forwardRef, useRef, useState } from 'react';
import { Input } from '../input';
import { Popper } from '../../primitives/popper';
import { IconButton } from '../button';

import { useSelect } from 'downshift';
import { Menu } from '../menu';

export type SelectOptionProps = Record<string, unknown>;

const SelectOption: React.FC<SelectOptionProps> = ({ children, ...props }) => (
    <Menu.Item {...props}>{children}</Menu.Item>
);

SelectOption.displayName = 'Select.Option';

export interface SelectOptionGroupProps {
    title: string | React.ReactNode;
}

const SelectOptionGroup: React.FC<SelectOptionGroupProps> = ({
    children,
    title,
    ...props
}) => (
    <>
        <Menu.Header {...props}>{title}</Menu.Header>
        {children}
    </>
);

SelectOptionGroup.displayName = 'Select.OptionGroup';

export interface SelectProps {
    onChange?: (selectedItem: string) => void;
}

type Props = SelectProps & React.HTMLAttributes<HTMLSelectElement>;

type SelectComponent = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLSelectElement>
>;

const Select: SelectComponent = forwardRef(({ onChange, ...props }, ref) => {
    const anchorRef = useRef(ref);
    const innerRef = useRef(null);

    const [items] = useState<string[]>(['Option1', 'Option2', 'Option3']);

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
    } = useSelect({
        items,
        onSelectedItemChange: ({ selectedItem }) =>
            selectedItem && onChange && onChange(selectedItem),
    });

    return (
        <>
            <Input
                ref={anchorRef}
                value={selectedItem ? selectedItem : ''}
                readOnly
                addonRight={<IconButton icon="chevronDown" />}
                {...getToggleButtonProps({ refKey: 'innerRef' })}
                {...props}
            />
            <Popper
                isOpen={isOpen}
                anchorRef={anchorRef}
                popperOptions={{ placement: 'bottom' }}
            >
                <Menu ref={innerRef} {...getMenuProps()}>
                    {items.map((item, idx) => (
                        <SelectOption
                            key={idx}
                            {...getItemProps({
                                item,
                                refKey: 'innerRef',
                            })}
                        >
                            {item}
                        </SelectOption>
                    ))}
                </Menu>
            </Popper>
        </>
    );
});

Select.displayName = 'Select';

export default Select;
