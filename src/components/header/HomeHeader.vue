<template>
  <div class="header-wapper">

    <div class="header-left">
      <Logo></Logo>

    </div>

    <div class="header-right">
      <HomeSearch></HomeSearch>
      <HomeCtegorize></HomeCtegorize>
      <AboutMe></AboutMe>
    </div>

  </div>
</template>

<script>

import Logo from "@/components/logo";
import HomeSearch from "@/components/search/HomeSearch";

import AboutMe from "@/components/aboutme/AboutMe";
import HomeCtegorize from "@/components/categorize/HomeCtegorize";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomeHeader",

  components: {Logo, HomeSearch, HomeCtegorize, AboutMe}

}
</script>

<style scoped>



.header-wapper{

  min-width: 1440px;
  height: 80px;
  box-shadow: 2px 2px 10px #E5E5E5;
  background-color: white;
  padding: 0px 30px;
  position: sticky;
  top:0px;

}
.header-left{

  height: 100%;
  float: left;
  display: flex;
  align-items:center;

}


.header-right{
  height: 100%;
  float: right;
}

</style>