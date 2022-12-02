<template>
  <div class="comic-wapper">



      <div class="comic-cover">
        <img :src="comicUrl" class="cover">
      </div>
      <div >
        <p class="comic-name">{{comicName}}</p>

      </div>




  </div>
</template>

<script>
export default {
  name: "HomeComic",
  data(){
    return{
      comicUrl:'http://localhost:2520/public/img/cover/maozhiming.png',
      comicName:'猫之茗',


    }
  }
}
</script>

<style scoped>

.comic-wapper{
  display: inline-block;
  /*background-color: #85898E;*/
  width: 235px;
  /*height: 200px;*/
}

.cover{
  width: 235px;
  height: 130px;
}
.comic-name{
  /*background-color: #E5041E;*/
  font-size: 20px;
  white-space: nowrap; /* 文本不换行 */
  overflow: hidden;
}



</style>


