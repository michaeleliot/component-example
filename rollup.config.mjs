import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";


export default {
  input: "src/index.ts",
  external: [
    'react',
    'react-dom',
    'prop-types'
  ],
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    {
      name: "foobar",
      file: 'lib/index.umd.js',
      format: 'umd',
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      },
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
        extensions: ['.css']
    })
  ]
};