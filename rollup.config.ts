import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import type { RollupOptions } from 'rollup'

const format = process.env.FORMAT || 'esm'

const config: RollupOptions = {
  input: './src/index.ts',
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    })
  ],

  external: ['react', 'react-dom']
}

if (format === 'esm' || format === 'cjs' || format === 'umd') {
  config.output = {
    format,
    file:
      format === 'umd'
        ? process.env.NODE_ENV === 'production'
          ? 'lib/umd/table-custom.min.js'
          : `lib/${format}/table-custom.${format}.js`
        : `lib/${format}/table-custom.${format}.js`
  }

  config.plugins?.push(
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      sourceMap: false, // default
      minify: process.env.NODE_ENV === 'production',
      target: 'es2017', // default, or 'es20XX', 'esnext'
      jsx: 'transform', // default, or 'preserve'
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"'
      },
      tsconfig: 'tsconfig.json', // default
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        '.json': 'json',
        // Enable JSX in .js files too
        '.js': 'jsx'
      }
    })
  )
}

if (format === 'umd') {
  config.output = {
    format,
    name: 'table-custom',
    file:
      process.env.NODE_ENV === 'production'
        ? 'lib/umd/table-custom.min.js'
        : 'lib/umd/table-custom.js'
  }
  config.plugins?.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  )
}

if (format === 'dts') {
  config.output = {
    format: 'es',
    file: 'types/table-custom.d.ts'
  }
  config.plugins?.push(dts())
}

export default config
