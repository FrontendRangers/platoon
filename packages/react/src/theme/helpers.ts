import { useColorMode } from './colorModes';

export const color = (key: string) => ({ theme }: any): string =>
    theme.components ? theme.color[key] : null;

export const themeMode = (styles: any): any => (): any => {
    const { colorMode } = useColorMode();

    if (!colorMode) {
        return;
    }
    return styles[colorMode];
};
