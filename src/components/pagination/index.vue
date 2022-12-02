<template>
  <div class="pagination-wapper">


    <router-link :to="url +'?pageNum=1'"><button class="page" >首页</button></router-link>

    <router-link :to="url +'?pageNum=' + index"
                 v-for="index in 5"
                 :key="index" >
      <button :class="[{'active' : pageNum === index},{'page': pageNum !== index}]">{{index}}</button>
    </router-link>

    <router-link :to="url +'?pageNum=' + (pageNum + 1)"><button class="page" >下一页</button></router-link>
    <router-link :to="url +'?pageNum=' + endPage"><button class="page" >尾页</button></router-link>



  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  data(){
    return{
      total:1001,
      // pageNum:1,
      pageSize:10

    }
  },

  computed:{
    pageNum(){
      if (this.$route.query.pageNum){
        return this.$route.query.pageNum - 0;
      } else{
        return 1;
      }
    },
    url(){
      return this.$route.path;
    },

    endPage(){
      if (this.total % this.pageSize === 0){
        return this.total / this.pageSize;
      } else{
        return parseInt(this.total / this.pageSize + 1);
      }
    }

  }

}
</script>

<style scoped>

.pagination-wapper{
  width: 100%;
  display: flex;
  /* 水平垂直居中 */
  justify-content: center;

}


.page,
.active{


  color: #666666;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 13px;
  text-align: center;
  border-radius: 2px;
  background-color: white;
  border: #E3E3E3 1px solid;

}

.page:hover{
  background-color: #F1F1F1;
}

.active{
  color: #E5041E;
  border: #E5041E 1px solid;
  background-color: #F1F1F1;

}



</style>