// HELPERS

// Native get function - get value in an object depending on the path
export const get = (obj: object, path: string, defaultValue: any) => {
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

export const themeGet: any = (path: string, fallback: any = null) => ({
    theme,
}) => get(theme, path, fallback);

export const variantGet: any = (path: string) => (props: any) => {
    const { theme } = props;
    const scale = path.split('.').pop();
    const propValue = !!scale && props[scale];
    const variant = get(theme, `${path}.${propValue}`, null);

    if (!variant) {
        return;
    }

    const variantWithMode = !!theme.mode && variant[theme.mode];
    return variantWithMode ? variantWithMode : variant;
};

export const themed = (key: string, fallback: any = null) =>
    themeGet(`${key}`, fallback);

export const variant = (key: string) => variantGet(`${key}`);

export const token = (key: string, fallback: any = null) =>
    themeGet(`${key}`, fallback);

export const color = (key: string, fallback: any = null) =>
    themeGet(`${key}`, fallback);
