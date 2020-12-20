import { createContext } from 'react';
import {
    UseDiscloseProps,
    useDisclosure,
    UseDisclosureReturn,
} from '../../hooks';

type MenuContextOptions = UseDisclosureReturn;

export const MenuContext = createContext({} as MenuContextOptions);

type UseMenuProps = UseDiscloseProps;

type UseMenu = (props?: UseMenuProps) => UseDisclosureReturn;

export const useMenu: UseMenu = (props) => {
    const options = useDisclosure(props);
    return options;
};
