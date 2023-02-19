<template>
  <div class="home-novel-wapper">
    <div>

      <div class="novel" v-for="i in 18" :key="i">
        <HomeNovel></HomeNovel>
      </div>

    </div>
  </div>
</template>

<script>
import HomeNovel from "@/components/novel/HomeNovel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Novel",
  components:{HomeNovel}
}
</script>

<style scoped>

.home-novel-wapper{
  width: 1000px;
  margin: 0 auto;
  /*background-color: #b3d4fc;*/
}

.novel{

  display: inline-block;
  margin: 10px 0 20px 20px;

}
.novel:nth-child(3n + 1){
  margin-left: 0;
}

</style>