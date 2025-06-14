import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { minify } from "rollup-plugin-esbuild-minify";
import { watch } from "rollup";

const config = {
  input: "./src/js/main.js",
  output: {
    file: "./dist/js/scripts.min.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [nodeResolve(), commonjs(), minify()],
};

export default config;
