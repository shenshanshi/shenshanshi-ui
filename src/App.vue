<template>
  <div id="app">
    <div v-if="this.$route.meta.homeHead" >
      <HomeHeader></HomeHeader>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

import HomeHeader from "@/components/header/HomeHeader";

export default {
  name: 'App',

  components:{HomeHeader}

}
</script>

<style>

#app{
  /*background-color: white;*/
}


</style>
