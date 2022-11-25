<template>
  <div class="animation-wapper">


    <div class="animation-type-wapper" v-for=" (type, index) in types" :key="index">


      <div class="animation-type">

        <strong>{{type}}</strong>
      </div>

      <div class="animation" v-for="i in 12" :key="i">
        <homeAnimation></homeAnimation>
      </div>



    </div>




  </div>
</template>

<script>

import homeAnimation from "@/components/animation/HomeAnimation";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Animation",
  components: {homeAnimation},

  data(){
    return{

      types:["每日推荐", "最近更新", "国产动漫", "动漫电影"]


    }
  }
}
</script>

<style scoped>
.animation-wapper{
  width: 1000px;
  margin: 0px auto;
  /*background-color: wheat;*/
}

.animation-type-wapper::before{
  content:"";
  display: inline-block;
  /*position: absolute;*/
  top:30px;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: #E5041E;

}


.animation-type{

  margin: 20px auto;
  font-size: 20px;
  color: #E5041E;

}


.animation{
  display: inline-block;
  margin-bottom: 30px;
  margin-left: 20px;
}
.animation:nth-child(6n+2){
  margin-left: 0px;
}


</style>