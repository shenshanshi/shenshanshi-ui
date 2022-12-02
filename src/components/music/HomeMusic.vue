<template>
  <div class="music-wapper">

    <div class="cover-wapper">
      <img :src="musicUrl" class="cover">
    </div>
    <div class="name-wapper">
      <router-link to="###">
        <p class="name">{{musicName}}</p>
      </router-link>

      <router-link to="###">
        <p class="author">{{musicAuthor}}</p>
      </router-link>
    </div>

    <div></div>

  </div>
</template>

<script>
export default {
  name: "HomeMusic",
  data(){
    return{
      musicUrl:"http://localhost:2520/public/img/cover/huazhita.jpg",
      musicName: "花之塔",
      musicAuthor:"さユり"
    }
  }
}
</script>

<style scoped>

.music-wapper{
  height: 62px;
  width: 320px;
  background-color: white;

}
.music-wapper>div{
  position: relative;
  display: inline-block;

}

.cover{
  width: 62px;
  height: 62px;
  border-radius: 4px;
}

.name-wapper{
  margin-left: 10px;
  width: 200px;

}
.name{
  position: absolute;
  bottom: 25px;
  /*color: #F1F1F1;*/
  font-size: 20px;
  /*background-color: #00aaee;*/


}

.author{
  font-size: 12px;
  line-height: 20px;
  /*background-color: #E5041E;*/
  position: absolute;
  bottom: 8px;
  /*bottom: 0;*/
}

p:hover{
  color: #E5041E;
}


</style>