import React, { forwardRef, useRef, useState } from 'react';
import { Popper } from '../../primitives/popper';

import { useSelect } from 'downshift';
import { platoon } from '@platoon/system';
import { Input } from '../input';
import { Icon } from '../icon';

export interface SelectProps {
    onChange?: (selectedItem: string) => void;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
    ({ onChange, ...props }, ref) => {
        const anchorRef = useRef<HTMLButtonElement>();

        const [items] = useState<string[]>(['Option1', 'Option2', 'Option3']);

        const {
            isOpen,
            selectedItem,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            highlightedIndex,
        } = useSelect({
            items,
            onSelectedItemChange: ({ selectedItem }) =>
                !!selectedItem && onChange?.(selectedItem),
        });

        return (
            <platoon.div ref={ref}>
                <Input
                    ref={anchorRef}
                    readOnly
                    value={selectedItem || 'Select'}
                    {...getToggleButtonProps({ refKey: 'inputRef' })}
                    {...props}
                >
                    <Input.Right>
                        <Icon name="chevronDown" />
                    </Input.Right>
                </Input>

                <Popper anchorRef={anchorRef}>
                    <platoon.ul {...getMenuProps()}>
                        {isOpen &&
                            items.map((item, index) => (
                                <platoon.li
                                    style={
                                        highlightedIndex === index
                                            ? { backgroundColor: '#bde4ff' }
                                            : {}
                                    }
                                    key={`${item}${index}`}
                                    {...getItemProps({ item, index })}
                                >
                                    {item}
                                </platoon.li>
                            ))}
                    </platoon.ul>
                </Popper>
            </platoon.div>
        );
    },
);

Select.displayName = 'Select';

export default Select;
