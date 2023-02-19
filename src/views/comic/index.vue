<template>

  <div class="home-comic-wapper">

    <div class="pagination-wapper">
      <Pagination></Pagination>
    </div>
    <div class="comic-type-wapper">

      <div class="comic" v-for="i in 16" :key="i">
        <HomeComic></HomeComic>
      </div>

    </div>
    <div class="pagination-wapper">
      <Pagination></Pagination>
    </div>

  </div>
</template>

<script>

import HomeComic from "@/components/comic/HomeComic";
import Pagination from "@/components/pagination";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Comic",
  components:{HomeComic, Pagination}
}
</script>

<style scoped>
.home-comic-wapper{
  width: 1000px;
  /*background-color: #E5041E;*/
  margin: 0 auto;
}

.comic{
  display: inline-block;
  margin: 10px 0 20px 20px;
}
.comic:nth-child(4n+1){
  margin-left: 0;
}
.pagination-wapper{
  margin: 20px 0;
}


</style>