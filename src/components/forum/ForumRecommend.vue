<template>
  <div class="forum-recommend-wapper">
    <ForumItem></ForumItem>
    <ForumItem></ForumItem>
    <ForumItem></ForumItem>


  </div>
</template>

<script>
import ForumItem from "@/components/forum/ForumItem";
export default {

  name: "ForumRecommend",
  components:{ForumItem}
}
</script>

<style scoped>
.forum-recommend-wapper{
  width: 100%;
  height: 1200px;
  border-radius: 5px;
  box-sizing: border-box;
  /*padding: 0 10px;*/
  /*background-color: white;*/
}
</style>