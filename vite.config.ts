// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import eslintPlugin from 'vite-plugin-eslint'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), eslintPlugin()],
//   server: {
//     watch: {
//       usePolling: true,
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       less: {
//         javascriptEnabled: true,
//       },
//     },
//   },
// })

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';

export default defineConfig({
  base: "/boomjar",
  plugins: [
    vue(),
    eslintPlugin(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    mainFields: ['browser', 'module', 'main', 'jsnext:main', 'jsnext'],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#ff003d',
        },
        javascriptEnabled: true,
      },
    },
  },
})
