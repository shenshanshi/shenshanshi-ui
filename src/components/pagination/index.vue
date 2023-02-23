<template>

    <div class="pagination">
      <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
      <button v-if="startAndEndNum().start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
      <button v-if="startAndEndNum().start > 2">···</button>

      <button v-for="(page,index) in startAndEndNum().end" :key="index"
              v-show="page>=startAndEndNum().start"
              @click="$emit('getPageNo',page)"
              :class="{active:pageNo==page}"
      >{{page}}</button>

      <button v-if="startAndEndNum().end <= (totalPage - 2)">···</button>
      <button v-if="startAndEndNum().end <= (totalPage - 1)" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>
      <button :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>
      <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>



<!--  <div class="pagination-wapper">-->
<!--    <div>111</div>-->
<!--    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>-->
<!--    <button v-if="startNum.start>1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>-->
<!--    <button v-if="startNum.start>2">...</button>-->
<!--    <button v-for="(page,index) in startNum.end" :key="index" v-if="page>=startNum.start" @click="$emit('getPageNo',page)"  :class="{active:pageNo==page}">{{page}}</button>-->
<!--    <button v-if="startNum.end<=totalPage-1">...</button>-->
<!--    <button v-if="startNum.end<=totalPage"  @click="$emit('getPageNo',totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>-->
<!--    <button :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>-->
<!--    <button style="margin-left: 30px">共{{total}}条</button>-->
<!--  </div>-->



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
  name: "pagination",
  props:['pageNo','pageSize','total','continue'],
  // computed:{
  // //   总页数
  //   totalPage() {
  //     return Math.ceil(this.total/this.pageSize)
  //   },
  //   startNum() {
  //     const { continues , pageNo, totalPage}=this;
  //     let start = 0,end=0;
  //     if(continues>totalPage){
  //       start=1;
  //       end=totalPage;
  //
  //     }else {
  //       start=pageNo-parseInt(continues/2);
  //       end=pageNo+parseInt(continues/2);
  //       if(start<1){
  //         start=1;
  //         end=continues;
  //
  //       }
  //       if(end>totalPage){
  //         end=totalPage;
  //         start=totalPage-continues+1;
  //       }
  //     }
  //      return {start,end};
  //
  //   }
  // },
  data(){
    return{
      // total:1001,
      // // pageNum:1,
      // pageSize:10


    }
  },

    methods: {
      startAndEndNum(){
        let start = 0, end=0
        start = this.pageNo - Math.floor(this.continue/2)
        end = this.pageNo + Math.floor(this.continue/2)
        //当总页数小于一排需呈现的页数时
        //结束页数为总页数
        if(this.totalPage<this.continue){
          end = this.totalPage
        }
        //当得出的开始页数小于1时，设置它为等于1
        //此时还需设置保证页面有continue个页数，所以结束页面为continue的值所在页数
        if(start<1){
          start = 1
          end = this.continue
        }
        //当结束页数大于总页数时，设置结束页数为总页数，且开始页数保持为总页数减去continue+1。
        if(end > this.totalPage){
          start = this.totalPage -this.continue + 1
          end = this.totalPage
        }

        return {start,end}
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

<style lang="less" scoped>

.pagination {
button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;

&[disabled] {
   color: #c0c4cc;
   cursor: not-allowed;
 }

&.active {
   cursor: not-allowed;
   background-color: #409eff;
   color: #fff;
 }
}
}


</style>