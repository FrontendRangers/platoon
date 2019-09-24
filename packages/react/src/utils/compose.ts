// Copied from https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js

export const composeComponent = (...funcs: Function[]) =>
    funcs.reduce(
        (a, b) => (...args: any[]) => a(b(...args)),
        (arg: any) => arg,
    );
