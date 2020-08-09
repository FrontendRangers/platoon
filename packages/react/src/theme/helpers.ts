import { useColorMode } from './themeProvider';

export const get = (
    obj: Record<string, unknown>,
    path: string,
    defaultValue: string,
) => {
    const result = String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce(
            (res: [], key: string) =>
                res !== null && res !== undefined ? res[key] : res,
            obj,
        );
    return result === undefined || result === obj ? defaultValue : result;
};

export const themeGet = (path: string, fallback: any = null): any => (
    props: any,
): any => get(props.theme, path, fallback);

export const themed = (key: string, fallback: any = null): any =>
    themeGet(`components.${key}.styles`, fallback);

export const token = (key: string, fallback: any = null): any =>
    themeGet(`tokens.${key}`, fallback);

export const color = (key: string) => ({ theme }: any): string =>
    theme.components ? theme.color[key] : null;

export const themeMode = (styles: any): any => (): any => {
    const mode = useColorMode();
    if (!mode) {
        return;
    }
    return styles[mode];
};
