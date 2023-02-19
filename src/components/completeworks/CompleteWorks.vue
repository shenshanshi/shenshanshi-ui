<template>

  <div class="complete-works-wapper">

    <div v-for="i in 15" :key="i">
      <router-link  :to="this.$route.path + 'complete=' + i">
        <div class="complete-works-item">第{{i}}集</div>
      </router-link>

    </div>



  </div>
</template>

<script>
export default {
  name: "CompleteWorks"
}
</script>

<style scoped>

.complete-works-wapper{
  /*display: flex;*/
  /*margin-top: 20px;*/
}
.complete-works-wapper>a{
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}
.complete-works-item{
  width: 60px;
  text-align: center;
  outline: 1px silver solid;
  margin-right: 20px;
  font-size: 20px;
  padding: 0 10px;
}

</style>