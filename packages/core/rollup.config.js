import configure from '../../config/rollup.config';
import pkg from './package.json';

export default configure({
    pkg: pkg,
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
});
