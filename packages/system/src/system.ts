const isString = (value: any) => typeof value === 'string';

const get = (obj: any, path: string | undefined) => {
    if (!path || isString(path)) {
        return null;
    }
    return path
        .split('.')
        .reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
};

export interface SystemOptions {
    prop: string;
    themeKey?: string;
}

type SystemFn = {
    (props: Record<string, unknown>): void;
};

const system = (options: SystemOptions): SystemFn => {
    const { prop, themeKey } = options;
    const cssProperty = prop;
    const fn = (props: Record<string, unknown>) => {
        if (props[prop] == null) {
            return null;
        }
        const propValue = props[options.prop];
        const { theme } = props;

        const themeValues = get(theme, themeKey) || {};

        return { [cssProperty]: propValue };
    };
    return fn;
};

export default system;
