import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

const dist = "dist"; // output folder

export default {
    input: "src/main.js",
    output: [
        {
            file: `${dist}/bundle.cjs.js`,
            format: "cjs",
            exports: "auto"
        },
        {
            file: `${dist}/bundle.umd.js`,
            format: "umd",
            name: "reactRollup",
            exports: "auto",
            globals: {
                "react": "React"
            }
        },
        {
            file: `${dist}/bundle.esm.js`,
            format: "esm",
            exports: "auto"
        }
    ],
    plugins: [
        resolve(),
        babel({ exclude: "node_modules/**", babelHelpers: "bundled"})
    ]
}
