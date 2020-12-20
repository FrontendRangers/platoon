import scStyled from 'styled-components';
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
const css = (args: Record<string, any>) => (props: Record<string, any>) => {
    console.log(args);

    return { ...args };
};

/**
 * Create styles to be applied to the styled component
 * @param options
 */
export const styleResolver = (options: Record<string, any>) => (
    props: Record<string, any>,
): any => {
    const { theme, ...rest } = props;

    const stylesFromProps = styledProps.reduce((acc, key) => {
        if (rest[key] === undefined) return acc;
        return {
            ...acc,
            [key]: rest[key],
        };
    }, {});

    // console.log(props);

    const computedStyles = css({ ...options, ...stylesFromProps })(props);

    const cssObject = Object.assign({}, computedStyles);

    return cssObject;
};

/**
 * Create a styled component
 * @param component
 * @param options
 */
export const styled = (
    component: keyof JSX.IntrinsicElements | React.ComponentType<any>,
    options?: Record<string, any>,
): any => {
    const { attrs, config, ...styles } = options ?? {};

    const styledFn = scStyled(component)
        .withConfig({
            shouldForwardProp: (prop: string, defaultValidatorFn) =>
                !styledProps.includes(prop) && defaultValidatorFn(prop),
            ...config,
        })
        .attrs(attrs);
    const args = styleResolver(styles);
    const StyledComponent = styledFn(args);

    return StyledComponent;
};

export const platoon = styled as any;

domElements.forEach((tag) => {
    platoon[tag] = platoon(tag);
});
