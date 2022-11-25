<template>
  <div class="search-wapper">
    <div class="search" :class="{'active': isActive}">

      <div class="search-input" >
        <input type="text" maxlength="50"
               v-model="keyWord"
               :class="{'active': isActive}"
               v-on:focus="focus = true"
               v-on:blur="focus = false" >
      </div>

      <div class="search-icon" @click="search">

        <img src="@/assets/icon/search.svg">

      </div>

    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomeSearch",
  data(){
    return{
      keyWord:'',
      focus: false
    }
  },
  methods:{

    search(){
      if (this.keyWord.length){
        this.$router.push("/search/all?keyWord=" + this.keyWord)
      }

    }

  },
  computed:{
    isActive(){
      return this.focus || this.keyWord.trim().length
    }

  }
}
</script>

<style scoped>
.search-wapper{
  height: 100%;
  display: flex;
  align-items:center;
  float: left;
  /*background-color: coral;*/
}



.search:hover ,div.active{
  outline: 1px solid  #E5041E;
}

.search:hover input, input.active{
  width: 300px;
}

.search{

  float: left;
  border-radius: 16px;
  font-size: 0px;



}

.search-input{
  float: left;
  display: block;
  height: 100%;
}
.search-icon{
  float: right;
}




input{

  /*display: none;*/
  padding: 6px 0px 4px 15px;
  color: #85898E;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  width: 0px;
  transition : width 0.2s;
  line-height: 23px;

}

img{
  margin-top: 3px;
  margin-left: 4px;
  width: 30px;
  border-radius: 20px;
  display: inline-block;
}
</style>