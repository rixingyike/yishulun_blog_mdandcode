<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <template #doc-after>
      <!-- 这是一个调皮的反加上一页的按钮 -->
      <div>
        <button @click="back">cd ··</button>
      </div>
      <!-- share on Twitter -->
      <Share />
      <Comments />
    </template>
    <!-- Home slot-->
    <template #home-hero-before><HomeHero /> </template>
    <template #home-features-after> <Page /> <Award /></template>
  </Layout>
  <!-- copywright -->
  <CopyRright />
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import HomeHero from "./HomeHero.vue";
import CopyRright from "./CopyRright.vue";
import Comments from "./Comments.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
import Award from "./Award.vue";
import Share from "./Share.vue";

const { Layout } = DefaultTheme;
const back = () => {
  history.back();
};
</script>
<style scoped>
@media (min-width: 1400px) {
  .content {
    margin-right: 350px;
  }
}

button {
  display: inline-block;
  position: relative;
  color: var(--vp-c-color-d);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-color-d);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
