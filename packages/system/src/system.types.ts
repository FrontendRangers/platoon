import React from 'react';

export type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
    as?: As;
};

export type OmitCommonProps<
    Target,
    OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'transition' | 'as' | 'color' | OmitAdditionalProps>;

export type RightJoinProps<
    SourceProps extends Record<string, unknown>,
    OverrideProps extends Record<string, unknown>
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
    ComponentProps extends Record<string, unknown>,
    AsProps extends Record<string, unknown>,
    AdditionalProps extends Record<string, unknown>,
    AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
    RightJoinProps<AsProps, AdditionalProps> & {
        as?: AsComponent;
    };

export type ComponentWithAs<
    Component extends As,
    Props extends Record<string, unknown>
> = {
    <AsComponent extends As>(
        props: MergeWithAs<
            React.ComponentProps<Component>,
            React.ComponentProps<AsComponent>,
            Props,
            AsComponent
        >,
    ): JSX.Element;

    displayName?: string;
    propTypes?: React.WeakValidationMap<any>;
    contextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<any>;
    id?: string;
};
