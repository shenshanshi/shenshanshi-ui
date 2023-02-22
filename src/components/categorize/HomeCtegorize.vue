<template>
  <div class="theme-wapper">
    <ul>
      <li v-for="(theme) in themes" :key="theme.theme">
        <router-link class="theme" :to="'/' + theme.theme"  active-class="active">
          {{ theme.name }}
          <!--          <button v-on:click="show(theme.theme)"  :class="{'active':active === theme.theme}">{{ theme.name }}</button>-->

        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomeCategorize",

  data(){
    return{
      themes:[
        {
          name:"论坛",
          theme:"forum"
        },{
          name:"周边",
          theme:"periphery"
        },
        {
          name:"资源",
          theme:"resources"
        },

      ]


    }
  },


}
</script>

<style scoped>
.theme-wapper{

  height: 100%;
  float: left;
  display: flex;
  align-items:center;
  margin: 0 20px;
}
li{

  display: block;
  float: left;
}



.theme{


  width: 80px;
  line-height: 50px;
  font-size: 25px;
  color: #60656C;
  text-decoration: oldlace;
  margin: auto 15px;
  /*background-color: transparent;*/

}

.active{
  color: #E5041E;
}


</style>