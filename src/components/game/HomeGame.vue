<template>
  <div class="game-wapper">
    <div class="game-cover">
      <img :src="gamerl" class="cover">
    </div>
    <div >
      <p class="game-name">{{gameName}}</p>
      <p class="star" v-for="num in 5" :key="num" :class="{'active' : num <= star}" >★</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "HomeGame",
  data(){
    return{
      gamerl:'http://localhost:2520/public/img/cover/maozhiming.png',
      gameName:'猫之茗',
      star: 4

    }
  }
}
</script>

<style scoped>

.game-wapper{
  /*display: inline-block;*/
  width: 235px;
  /*background-color: #85898E;*/
  background-color: #F1F1F1;

}

.cover{
  width: 235px;
  height: 130px;
}
.game-name{
  font-size: 20px;
  white-space: nowrap; /* 文本不换行 */
  overflow: hidden;
}

.star{
  display: inline-block;
  font-size: 20px;
  color: #85898E;

}
.active{
  color: #00aaee;
}


</style>