import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import { uglify } from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    uglify(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
