<template>
  <footer>
    Powered by
    <a href="https://vitepress.dev/" target="_blank">VitePress</a> & <a href="https://github.com/clark-cui/vitepress-blog-zaun" target="_blank">vitepress-blog-zaun</a>
    | Copyright © 2002-{{ date }} | MIT License
  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear();
</script>
<style scoped>
footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
}
a {
  color: var(--vp-c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--vp-c-hover);
}
</style>
