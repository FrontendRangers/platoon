import { platoon } from '@platoon/system';
import { useCombobox } from 'downshift';
import React, { forwardRef, useRef, useState } from 'react';
import { Flex, Popper } from '../../primitives';
import { Button } from '../button';
import { Input } from '../input';

export interface ComboBoxProps {
    items: string[];
}

const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>((props, ref) => {
    const { items = [] } = props;
    const [inputItems, setInputItems] = useState(items);
    const anchorRef = useRef<HTMLLabelElement>(null);
    const {
        isOpen,
        getComboboxProps,
        getInputProps,
        getToggleButtonProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue }) => {
            !!inputValue &&
                setInputItems(
                    items.filter((item) =>
                        item.toLowerCase().startsWith(inputValue.toLowerCase()),
                    ),
                );
        },
    });
    return (
        <platoon.div ref={ref}>
            <platoon.div ref={anchorRef}>
                <Flex {...getComboboxProps()}>
                    <Input {...getInputProps({ refKey: 'inputRef' })} />
                    <Button
                        {...getToggleButtonProps()}
                        aria-label="toggle menu"
                    >
                        &#8595;
                    </Button>
                </Flex>
            </platoon.div>
            <Popper anchorRef={anchorRef}>
                <platoon.ul {...getMenuProps()}>
                    {isOpen &&
                        items.map((item: string, index: number) => (
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
});

export default ComboBox;
