<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <template #doc-after>
      <Share />
      <AdInArticleFooter />
      <Comments />
    </template>
    <!-- Home slot-->
    <template #home-hero-before>
      <HomeHero /> 
    </template>
    <template #home-features-after> 
      <HomePage /> 
      <Award />
      <div class="width-wrapper">
        <AdInArticleFooter />
      </div>
    </template>
  </Layout>
  <!-- copywright -->
  <CopyRright />
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import HomeHero from "./HomeHero.vue";
import CopyRright from "./CopyRright.vue";
import Comments from "./Comments.vue";
import HomePage from "./HomePage.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
import Award from "./Award.vue";
import Share from "./Share.vue";
import AdInArticleFooter from "./AdInArticleFooter.vue";

const { Layout } = DefaultTheme;
</script>
<style scoped>
.width-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
