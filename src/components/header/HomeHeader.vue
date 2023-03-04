<template>
  <div class="xxxxxxx">
    <div class="header-wapper" >

      <div class="header-left">
        <Logo></Logo>
      </div>

      <div class="header-right">
        <HomeSearch></HomeSearch>
        <HomeCtegorize></HomeCtegorize>
        <AboutMe></AboutMe>
      </div>

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

  components: {Logo, HomeSearch, HomeCtegorize, AboutMe},

  methods:{

  }

}
</script>

<style scoped>


.xxxxxxx{



  width: 100%;
  height: 80px;
  min-width: 1000px;
  background-color: white;
  box-shadow: 2px 2px 10px #E5E5E5;
  position: relative;
  top:0;
  z-index: 99999;

}

.header-wapper{

  width: 1000px;
  height: 100%;
  margin: 0 auto;

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