import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/client/components/app/app.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  plugins: [
    resolve (), // tells Rollup how to find date-fns in node_modules
    commonjs (), // converts date-fns to ES modules
    production && terser (), // minify, but only in production
    copy ({
      targets: [
        {src: 'src/client/index.html', dest: 'public'},
        {src: 'src/client/favicon.ico', dest: 'public'},
        {src: 'src/client/svg/*', dest: 'public/svg'},
        {src: 'src/client/components/app/screens', dest: 'public'},
      ],
    }),
  ],
};
