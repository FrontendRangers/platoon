import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

export default (opts) => {
    const { pkg, ...options } = opts;
    return {
        ...options,
        external: [...Object.keys(pkg.dependencies || {})],
        plugins: [
            external(),
            resolve(),
            typescript({
                rollupCommonJSResolveHack: true,
                exclude: '**/__tests__/**',
                clean: true,
            }),
            commonjs({
                include: ['node_modules/**'],
                namedExports: {
                    'node_modules/react/react.js': [
                        'Children',
                        'Component',
                        'PropTypes',
                        'createElement',
                    ],
                    'node_modules/react-dom/index.js': ['render'],
                },
            }),
            terser(),
        ],
    };
};
