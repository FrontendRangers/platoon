const themed = (key: string) => ({ theme }): string =>
    theme.components ? theme.components[key] : null;

const color = (key: string) => ({ theme }): string =>
    theme.components ? theme.color[key] : null;

export { themed, color };
