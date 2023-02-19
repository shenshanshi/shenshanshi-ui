<template>
  <div class="animation-wapper">

    <div v-if="!this.$route.meta.isInfo">
      <div class="pagination-wapper">
        <Pagination></Pagination>
      </div>

      <div class="animation-type-wapper">

        <div class="animation" v-for="i in 24" :key="i">
          <HomeAnimation></HomeAnimation>
        </div>

      </div>

      <div class="pagination-wapper">
        <Pagination></Pagination>
      </div>
    </div>



    <router-view></router-view>


  </div>
</template>

<script>

import HomeAnimation from "@/components/animation/HomeAnimation";
import Pagination from "@/components/pagination";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Animation",
  components: {HomeAnimation, Pagination},

  data(){
    return{

      types:["每日推荐", "最近更新"]


    }
  }
}
</script>

<style scoped>
.animation-wapper{
  width: 1000px;
  margin: 0px auto;
  margin-bottom: 100px;
}




.pagination-wapper{
  margin: 20px 0;
}

.animation{
  display: inline-block;
  margin-bottom: 30px;
  margin-left: 20px;
}
.animation:nth-child(6n+1){
  margin-left: 0px;
}


</style>