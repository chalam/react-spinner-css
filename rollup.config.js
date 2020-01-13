import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const input = 'src/index.js'

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
}

const external = Object.keys(globals)

const extensions = ['.js', '.jsx']

const output = {
  globals,
  name: 'ReactCssSpinners',
  format: 'umd',
}

const babelOptions = {
  extensions,
  babelrc: false, // to ignore @babel/transform-runtime
  exclude: 'node_modules/**',
  presets: ['@babel/env', '@babel/react'],
}

export default [
  {
    input,
    external,
    output: [
      {
        ...output,
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
      },
      {
        ...output,
        file: 'dist/bundle.esm.js',
        format: 'esm',
      },
      {
        name: 'ReactSpinnerCSS',
        ...output,
        file: 'dist/bundle.umd.js',
        format: 'umd',
      },
    ],
    plugins: [
      resolve({
        extensions,
      }),
      babel(babelOptions),
      postcss({
        extract: 'dist/style.css',
      }),
    ],
  },
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.min.js',
    },
    plugins: [
      resolve({
        extensions,
      }),
      babel({
        ...babelOptions,
        plugins: ['transform-react-remove-prop-types'],
      }),
      postcss({
        extract: 'dist/style.min.css',
        minimize: true,
      }),
      terser(),
    ],
  },
]
