import configure from '../../config/rollup.config';
import pkg from './package.json';

export default configure({
    pkg: pkg,
    input: './src/index.ts',
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            dir: 'dist/ejs',
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
});
