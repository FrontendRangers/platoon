import configure from '../../config/rollup.config';

export default configure({
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
