import React from 'react';

type CreateContext<T> = [React.Provider<T>, () => T, React.Context<T>];

export const createContext = <ContextType>(): CreateContext<ContextType> => {
    const Context = React.createContext<ContextType | undefined>(undefined);

    const useContext = () => {
        const context = React.useContext(Context);
        return context;
    };

    return [
        Context.Provider,
        useContext,
        Context,
    ] as CreateContext<ContextType>;
};

export const getValidChildren = (
    children: React.ReactNode,
): React.ReactElement[] =>
    React.Children.toArray(children).filter((child) =>
        React.isValidElement(child),
    ) as React.ReactElement[];
