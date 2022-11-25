<template>
  <div id="app">
    <HomeHeader></HomeHeader>
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

</style>
