<template>

  <div class="pagination-wapper">
    <div>111</div>
    <button :disabled="pageNo==1" @click="$event=>$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNum.start>1" @click="$event=>$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startNum.start>2">...</button>
    <button v-for="(page,index) in startNum.end" :key="index" v-if="page>=startNum.start" @click="$event=>$emit('getPageNo',page)"  :class="{active:pageNo==page}">{{page}}</button>
    <button v-if="startNum.end<=totalPage-1">...</button>
    <button v-if="startNum.end<=totalPage"  @click="$event=>$emit('getPageNo',totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo==totalPage" @click="$event=>$emit('getPageNo',pageNo+1)">下一页</button>
    <button style="margin-left: 30px">共{{total}}条</button>
  </div>



<!--    <router-link :to="url +'?pageNum=1'"><button class="page" >首页</button></router-link>-->

<!--    <router-link :to="url +'?pageNum=' + index"-->
<!--                 v-for="index in 5"-->
<!--                 :key="index" >-->
<!--      <button :class="[{'active' : pageNum === index},{'page': pageNum !== index}]">{{index}}</button>-->
<!--    </router-link>-->

<!--    <router-link :to="url +'?pageNum=' + (pageNum + 1)"><button class="page" >下一页</button></router-link>-->
<!--    <router-link :to="url +'?pageNum=' + endPage"><button class="page" >尾页</button></router-link>-->



<!--  </div>-->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
  //   总页数
    totalPage() {
      return Math.ceil(this.total/this.pageSize)
    },
    startNum() {
      const { continues , pageNo, totalPage}=this;
      let start = 0,end=0;
      if(continues>totalPage){
        start=1;
        end=totalPage;

      }else {
        start=pageNo-parseInt(continues/2);
        end=pageNo+parseInt(continues/2);
        if(start<1){
          start=1;
          end=continues;

        }
        if(end>totalPage){
          end=totalPage;
          start=totalPage-continues+1;
        }
      }
return {start,end};

    }
  },
  data(){
    return{
      // total:1001,
      // // pageNum:1,
      // pageSize:10


    }
  },

  // computed:{
    // pageNum(){
    //   if (this.$route.query.pageNum){
    //     return this.$route.query.pageNum - 0;
    //   } else{
    //     return 1;
    //   }
    // },
    // url(){
    //   return this.$route.path;
    // },
    //
    // endPage(){
    //   if (this.total % this.pageSize === 0){
    //     return this.total / this.pageSize;
    //   } else{
    //     return parseInt(this.total / this.pageSize + 1);
    //   }
    // }

  // }

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