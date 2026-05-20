console.log('hello world');
import App from './App.vue';
import { createApp } from 'vue';

import { $typst } from '@wybxc/typst.ts';

$typst.setCompilerInitOptions({
  beforeBuild: [],
  getModule: () =>
    // 'https://cdn.jsdelivr.net/npm/@wybxc/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
    // For local development
    'http://localhost:20810/base/node_modules/@wybxc/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
});

$typst.setRendererInitOptions({
  beforeBuild: [],
  getModule: () =>
    // 'https://cdn.jsdelivr.net/npm/@wybxc/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
    // For local development
    'http://localhost:20810/base/node_modules/@wybxc/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
});

const app = createApp(App);

app.mount('#app');
