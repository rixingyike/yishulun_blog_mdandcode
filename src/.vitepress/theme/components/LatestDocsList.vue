<script setup lang="ts">
import { ref } from 'vue'

import PostItem from '@/components/PostItem.vue'
import { data as latestPosts } from '@/data/latestDocs.data'

const list = ref(latestPosts)
</script>

<template>
  <div>
    <h1 style="padding-top: 50px;">最新内容</h1>
    <PostItem
      v-for="item in list"
      :key="item.frontmatter.title"
      :info="{ ...item, ...item.frontmatter }"
    />
  </div>
</template>

<style scoped></style>
