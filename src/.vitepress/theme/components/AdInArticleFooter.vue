<template>
  <div class="social-share">
    <p class="description">
      <span>Recommend</span><br/>
      <ul class="list">
        <li class="link-header" v-for="item in adLinks">
          <a :href="item.link">{{
            item.title
          }}</a>
        </li>
      </ul>
    </p>
  </div>
</template>
<script lang="ts" setup>
const adLinks = [{
  title:"【编程攻略】初学者如何快速入门编程？",
    link:"https://mp.weixin.qq.com/s/Pt4UHmh3wO2lXBn3C2gKvA"
  }]
</script>

<style scoped>
.list {
  margin: 0;
  line-height: 1.7;
  list-style-type: none;
  box-sizing: border-box;
}
.link-header {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.link-header a, a:hover {
  text-decoration: underline;
}
.social-share {
  margin-top: 25px;
}
.title {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
}
.subtitle {
  font-size: 1em;
}
.description {
  margin: 1em 0;
  word-break: break-all;
  background-color: #FFC107;
  border-radius: 2px;
  padding: 2px 5px 2px;
}
.social-share button {
  margin: 0 5px;
}
</style>