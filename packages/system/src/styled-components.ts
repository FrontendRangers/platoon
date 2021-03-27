import scStyled, { CSSObject, StyledConfig } from 'styled-components';
import {
    background,
    border,
    color,
    compose,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
} from 'styled-system';

import css, { SystemStyleObject } from '@styled-system/css';

export const domElements = [
    'a',
    'b',
    'article',
    'aside',
    'blockquote',
    'button',
    'caption',
    'cite',
    'circle',
    'code',
    'dd',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hr',
    'img',
    'input',
    'kbd',
    'label',
    'li',
    'main',
    'mark',
    'nav',
    'ol',
    'p',
    'path',
    'pre',
    'q',
    'rect',
    's',
    'svg',
    'section',
    'select',
    'strong',
    'small',
    'span',
    'sub',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'tr',
    'ul',
] as const;

export const systemProps = compose(
    background,
    border,
    color,
    flexbox,
    layout,
    grid,
    position,
    shadow,
    space,
    typography,
);

const styledProps = [...(systemProps.propNames || [])];

/**
 * Create styles based on the theme
 * @param args
 */
// const css = (args: Record<string, any>) => (props: Record<string, any>) => {
//     // console.log(args);

//     return { ...args };
// };

const getVariantStyles = (variants: any, props: any): any => {
    return Object.keys(variants).reduce((acc, key) => {
        if (variants === undefined) return acc;
        if (typeof props[key] === 'boolean' && !!props[key]) {
            return {
                ...acc,
                ...variants[key],
            };
        }
        return {
            ...acc,
            ...variants[key][props[key]],
        };
    }, {});
};

const extractVariants = ({ variants, ...styles } = { variants: {}, ...{} }) => {
    if (typeof variants === 'undefined') {
        return [{}, styles];
    }
    return [variants, styles];
};

type StyleResolver = (
    options: SystemStyleObject,
) => (props: Record<string, any>) => CSSObject;

/**
 * Create styles to be applied to the styled component
 * @param options
 */
export const styleResolver: StyleResolver = (styles) => (props) => {
    const { theme, baseStyle, sx, ...rest } = props;

    // Extract variant from the sx prop
    const [variants, stylesProp] = extractVariants(sx);

    // Get all props related to the system
    const stylesFromProps = styledProps.reduce((acc, key) => {
        if (rest[key] === undefined) return acc;
        return {
            ...acc,
            [key]: rest[key],
        };
    }, {});

    // Generate styles from the variants
    const variantStyles = getVariantStyles(variants, props);

    const computedStyles = css({
        // Styles from function
        ...styles,
        // Variant styles from function
        ...variants,
        // Styles via props
        ...stylesProp,
        // Variant styles via prop
        ...variantStyles,
        // Styles from system props
        ...stylesFromProps,
    })(theme);

    const cssObject = Object.assign({}, baseStyle, computedStyles);

    return cssObject;
};

type StyledStyles = SystemStyleObject & {
    variants?: Record<any, any>;
};

interface StyledOptions {
    attrs?: any;
    config?: StyledConfig<any>;
}

/**
 * Create a styled component
 * @param component
 * @param options
 */
export const styled = (
    component: keyof JSX.IntrinsicElements | React.ComponentType<any>,
    styles: StyledStyles = {},
    options?: StyledOptions,
): any => {
    const { attrs, config = {} } = options ?? {};

    const styledFn = scStyled(component).withConfig(config).attrs(attrs);
    const args = styleResolver(styles);
    const StyledComponent = styledFn(args);

    return StyledComponent;
};

export const platoon = styled as any;

domElements.forEach((tag) => {
    platoon[tag] = platoon(tag);
});
