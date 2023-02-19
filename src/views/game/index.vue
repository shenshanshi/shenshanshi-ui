<template>
  <div class="home-game-wapper">
    <div class="pagination-wapper">
      <Pagination></Pagination>
    </div>
    <div class="game-wapper">

      <div class="game" v-for="num in 16" :key="num">
        <HomeGame></HomeGame>

      </div>



    </div>
    <div class="pagination-wapper">
      <Pagination></Pagination>
    </div>

  </div>
</template>

<script>
import HomeGame from "@/components/game/HomeGame";
import Pagination from "@/components/pagination";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Game",
  components:{HomeGame, Pagination}
}
</script>

<style scoped>
.home-game-wapper{
  width: 1000px;
  margin: 0 auto;
  /*background-color: #E5041E;*/
}
.game{
  display: inline-block;
  margin: 10px 0 20px 20px;
}
.game:nth-child(4n+1){
  margin-left: 0;
}

.pagination-wapper{
  margin: 20px 0;
}


</style>