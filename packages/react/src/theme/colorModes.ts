import { createContext } from '@platoon/utils';

export type ColorMode = 'light' | 'dark';

type ColorModeOptions = {
    colorMode: ColorMode;
};

export const [
    ColorModeProvider,
    useColorMode,
    ColorModeContext,
] = createContext<ColorModeOptions>();
