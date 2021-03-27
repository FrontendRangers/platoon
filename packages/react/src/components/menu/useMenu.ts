import {
    UseDiscloseProps,
    useDisclosure,
    UseDisclosureReturn,
} from '../../hooks';
import { createContext } from '@platoon/utils';

type MenuContextOptions = UseDisclosureReturn;

export const [
    MenuProvider,
    useMenuContext,
] = createContext<MenuContextOptions>();

type UseMenuProps = UseDiscloseProps;

type UseMenu = (props?: UseMenuProps) => UseDisclosureReturn;

export const useMenu: UseMenu = (props) => {
    const options = useDisclosure(props);
    return options;
};
