import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default (opts) => {
    return {
        ...opts,
        plugins: [
            peerDepsExternal(),
            resolve(),
            typescript({ useTsconfigDeclarationDir: true }),
            commonjs(),
            terser(),
        ],
    };
};
