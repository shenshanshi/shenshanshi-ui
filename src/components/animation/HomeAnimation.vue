<template>
  <div class="home-animation-wapper">


    <router-link :to="playSrc" target="_blank">
      <img class="animation-cover" :src="cover">
    </router-link>

    <p class="name-wapper">
      <router-link class="animation-name" :to="playSrc" target="_blank">{{animationName}}</router-link>
    </p>
    <p class="updata-to-wapper">
      最新：
      <router-link :to="playSrc" class="updata-to" target="_blank">{{newest}}</router-link>

    </p>


  </div>
</template>

<script>
export default {

  name: "HomeAnimation",

  data(){
    return{


      cover:"http://localhost:2520/public/img/cover/yaoyeluying.jpg",

      animationName: "摇曳露营",

      animationId: 123456,
      count: 15,
      updataTo: 15
    }
  },
  computed:{

    playSrc(){
      return "animation/play/" + this.animationId
    },

    newest(){
      let s = "第" + this.updataTo + "集"
      if (this.count <= this.updataTo){
        s = s + "(全集)"
      }

      return s
    }

  },
  props: ["animation"]
}
</script>

<style scoped>

.home-animation-wapper{

  width: 150px;

}


.animation-cover{
  width: 150px;
  height: 208px;
}

.name-wapper{
  margin: 0px;
  /*background-color: #E5041E;*/
}

.animation-name{
  display: block;
  text-decoration: none;
  font-size: 15px;
  color: black;
  margin-top: 4px;
  white-space: nowrap; /* 文本不换行 */

  overflow: hidden;

  /*text-overflow: ellipsis; !* 文本溢出时显示省略号标记... *!//*/
  /*background-color: rebeccapurple;*/
}


.updata-to-wapper{
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
  white-space: nowrap; /* 文本不换行 */
  overflow: hidden;
}

.updata-to{
  text-decoration: none;
  color: black;
}




</style>