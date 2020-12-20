import { useColorMode } from './themeProvider';

export const color = (key: string) => ({ theme }: any): string =>
    theme.components ? theme.color[key] : null;

export const themeMode = (styles: any): any => (): any => {
    const mode = useColorMode();
    if (!mode) {
        return;
    }
    return styles[mode];
};
