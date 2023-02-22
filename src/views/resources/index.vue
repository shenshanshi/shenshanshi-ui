<template>
<div class="resources-wapper">
  <div  class="resources-left-wapper">

    <div class="wapper-fenlei" v-for="(feilei,index) in feileis" :key="index">

      <router-link to="###">

        {{feilei.name}}
      </router-link>
    </div>
  </div>

  <div class="resources-right-wapper">
    <div class="wapper-xiangqing"  v-for="(i, index) in 15" :key="index">
      <div class="left-image">
        <div >
         <img style="width: 290px;height: 180px;border-radius: 5px" src="@/assets/bj.jpeg">
        </div>
        <div>
          <div>标题</div>
          <div style="display: flex;justify-content: space-between">
            <div>下载量</div>
            <div>作者</div>
          </div>
        </div>
      </div>

    </div>
    <div>
      <Pagination></Pagination>
<!--      111-->
    </div>
  </div>

<!--  <div></div>-->
</div>
</template>

<script>
// import pagination from "@/components/pagination/index.vue";
// import Pagination from "@/components/pagination/index.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "resources",

  data() {
    return{
      feileis:[
        {
          id:1,
          name:'分类'
        },
        {
          id:2,
          name:'分类'
        },
        {
          id:3,
          name:'分类'
        },
      ]
    }
  },
  components:{
    // pagination
  }

}
</script>

<style scoped>

.resources-wapper{
  width: 1000px;
  min-width: 1000px;

/*  justify-content: center;*/
/*text-align: center;*/
  margin: 10px auto 0 auto;
}


.resources-left-wapper{
  float: left;
  font-size: 20px;
  width: 100px;
  /*height: 100px;*/
  background: white;
  margin-right: 20px;

}
.wapper-fenlei{
  border: 1px solid #ff2222;
  border-radius: 5px;
  text-align: center;
  margin: 2px 0px;
}
.resources-right-wapper {

  float: right;

  width: 880px;
  height: 500px;
  background: white;
}
.wapper-xiangqing{
  display: inline-block;
  width: 290px;
  margin-bottom: 20px;
  height: 240px;
  margin-left: 5px;
  background: #00aaee;
}
.left-image{
  /*  display: flex;*/
  /*justify-content: left;*/

}

.wapper-xiangqing:nth-child(3n+1){
  margin-left: 0;
}
.fenye-button{
  text-align: center;
  display: flex;
}

a{
  text-decoration: none;
}

</style>