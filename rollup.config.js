import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

const dist = "dist"; // output folder

export default {
    input: "src/main.js",
    external: ["react", "react-dom"],
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
        babel({ exclude: "node_modules/**", babelHelpers: "bundled"}),
        postcss({
            plugins: [autoprefixer()],
            extract: false,
            modules: true,
        }),
    ],
    external: ["react", "react-dom"],
    
}
