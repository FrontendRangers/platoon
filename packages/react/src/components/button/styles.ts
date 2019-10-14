import { css } from '@styled-system/css';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { themeGet } from '../../themes/helpers';
import { useColorMode } from '../../themes/themeProvider';

// TODO: move to helpers
const stylesFromProps = (theme, props, mode) => (result, prop) => {
    const propValue = props[prop];

    const stylesFromTheme =
        typeof propValue === 'boolean'
            ? themeGet(`Button.${prop}`)({
                  theme,
              })
            : themeGet(`Button.${prop}.${propValue}`)({
                  theme,
              });

    const stylesWithMergedModes = Object.keys(stylesFromTheme).reduce(
        (object, key) => {
            if (key === 'modes') {
                object = { ...object, ...stylesFromTheme.modes[mode] };
            } else {
                object[key] = stylesFromTheme[key];
            }
            return object;
        },
        {},
    );
    return {
        ...result,
        ...css(stylesWithMergedModes)({ ...theme, prop }),
    };
};

const getStyles = (props, theme, mode) =>
    Object.keys(props)
        .filter((prop) => props[prop] !== false)
        .reduce(stylesFromProps(theme, props, mode), {});

// ENDTODO

export const getButtonStyles = (props): any => {
    const theme = useContext(ThemeContext);
    const colorMode = useColorMode();

    if (!theme || !theme.Button) {
        return;
    }

    return {
        ...css(theme.Button.root)({ ...theme }),
        ...getStyles(props, theme, colorMode),
    };
};

export const getButtonIconStyles = ({ size }) => {
    // TODO: use getStyles()
    const theme = useContext(ThemeContext);

    return {
        ...css(theme.Button.Icon.root)({ ...theme }),
        ...css(theme.Button.Icon.size[size])({ ...theme }),
    };
};

export const getButtonLabelStyles = ({ size }): any => {
    // TODO: use getStyles()
    const theme = useContext(ThemeContext);

    return {
        ...css(theme.Button.Label.size[size])({ ...theme }),
    };
};
