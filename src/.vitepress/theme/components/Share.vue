<template>
  <div class="share-component">
    <button class="share-button" @click="share">分享</button>
    <div class="share-list">
      <a class="share-item" href="#" @click="shareToTwitter">Twitter</a>
      <a class="share-item" href="#" @click="shareToFacebook">Facebook</a>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'ShareComponent',
  setup() {
    const url = ref('');
    const title = ref('');
    const content = ref('');

    const share = () => {
      // 获取当前文章的链接、标题和内容
      const currentUrl = window.location.href;
      const currentTitle = document.title;
      const currentContent = document.querySelector('.article-content').innerHTML;

      // 分享到Twitter
      if (url.value === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${title.value}&url=${url.value}`);
      }

      // 分享到Facebook
      if (url.value === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url.value}`);
      }
    };

    return {
      url,
      title,
      content,
      share,
    };
  },
};
</script>

<style scoped>
.share-component {
  display: flex;
  justify-content: center;
  align-items: center;
}

.share-button {
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
}

.share-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.share-item {
  margin: 0 10px;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
}
</style>
