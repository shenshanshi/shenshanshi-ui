<template>
  <div class="logo-wapper">

    <router-link to="/" title="shenshanshi">
      <img src="@/assets/logo.jpg" class="logo" alt="">
    </router-link>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logo"
}
</script>

<style scoped>

.logo-wapper{
  /*background: #7DD6FA;*/
  height: 60px;
  width: 90px;
  display: flex;
  align-items: center;

}
.logo{
  display: block;
}

</style>