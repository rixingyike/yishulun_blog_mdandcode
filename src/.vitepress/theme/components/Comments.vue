<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "0cdfd84658051b0f7de6",
    clientSecret: "00abdf1125f10d508972810f86be70917e1ba05f",
    repo: "yishulun.com_discus",
    owner: "rixingyike",
    admin: ["rixingyike"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "zh-CN",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>
