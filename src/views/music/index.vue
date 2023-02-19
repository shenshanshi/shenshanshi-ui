<template>
  <div class="home-music-wapper">

    <div class="pagination-wapper">
      <Pagination></Pagination>
    </div>
    <div>

      <div class="music" v-for="i in 18" :key="i">
        <HomeMusic></HomeMusic>
      </div>

    </div>
    <div class="pagination-wapper">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import HomeMusic from "@/components/music/HomeMusic";
import Pagination from "@/components/pagination";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Music",
  components:{HomeMusic, Pagination}
}
</script>

<style scoped>

.home-music-wapper{
  width: 1000px;
  margin: 0 auto;
}

.music{

  display: inline-block;
  margin: 20px 0 10px 20px;
}
.music:nth-child(3n + 1){
  margin-left: 0;
}

.pagination-wapper{
  margin: 20px 0;
}

</style>