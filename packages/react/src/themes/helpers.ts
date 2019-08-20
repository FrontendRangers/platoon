export const get = (obj: object, path: string, defaultValue: string) => {
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

export const themeGet = (path: string, fallback: any = null) => (props: any) =>
    get(props.theme, path, fallback);

export const themed = (key: string, fallback: any = null) =>
    themeGet(`components.${key}.styles`, fallback);

export const token = (key: string, fallback: any = null) =>
    themeGet(`tokens.${key}`, fallback);

export const color = (key: string) => ({ theme }: any): string =>
    theme.components ? theme.color[key] : null;
