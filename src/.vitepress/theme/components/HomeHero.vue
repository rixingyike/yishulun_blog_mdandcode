<template>
  <div class="content">
    <div class="shareCard">
      <img :src="theme.avator" width="135" height="135" class="avator" />
      <br />
      <h1 class="title">
        <span>艺术论的哲学应用研究</span>
      </h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";
const { theme } = useData();
</script>
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-right: 0 !important;
}

.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
}
.description {
  margin: 1em 0;
}
.avator {
  border-radius: 50%;
  border: 5px solid var(--vp-avator-border);
}
</style>
