import React, { useState, useRef } from 'react';
import { BoxProps } from '../../primitives/box';
import { useCombobox } from 'downshift';
import { Input } from '../input';
import { Popper } from '../../primitives/popper';
import { IconButton } from '../button';
import { Menu } from '../menu';

export interface ComboBoxProps {
    items: string[];
}

type Props = ComboBoxProps & BoxProps;

type ComboBoxComponent = React.FC<Props>;

const ComboBox: ComboBoxComponent = ({ items, ...props }) => {
    const [inputItems, setInputItems] = useState(items);
    const anchorRef = useRef<any>(null);
    const innerRef = useRef<any>(null);

    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue = '' }) => {
            setInputItems(
                items.filter((item) =>
                    item.toLowerCase().startsWith(inputValue.toLowerCase()),
                ),
            );
        },
    });

    return (
        <>
            <Input
                ref={anchorRef}
                inputProps={getInputProps()}
                addonRight={
                    <IconButton
                        icon="chevronDown"
                        {...getToggleButtonProps()}
                    />
                }
                value={selectedItem || ''}
                {...props}
            />
            <Popper anchorRef={anchorRef} isOpen={isOpen}>
                <Menu ref={innerRef} {...getMenuProps()}>
                    {inputItems.map((item, index) => (
                        <Menu.Item
                            style={
                                highlightedIndex === index
                                    ? { backgroundColor: '#bde4ff' }
                                    : {}
                            }
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item}
                        </Menu.Item>
                    ))}
                </Menu>
            </Popper>
        </>
    );
};

export default ComboBox;