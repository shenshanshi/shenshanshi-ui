<template>
<div class="resources-wapper">
  <div class="resources-top-wapper" >


    <div style="width: 1px; height: 20px"></div>
    <div class="resources-fenlei-wapper">




      <div class="resources-fenlei-mingzi-wapper">
        <div class="resources-fenlei-name-wapper" ><p>分类</p></div>
        <div class="resources-fenlei-item-wapper"
            v-for="(i, index) in 10" :key="i"
             :class="{'fenlei-active': fenleiindex === index}"
        >
          <p>游戏</p>
        </div>
      </div>

      <div class="resources-fenlei-mingzi-wapper">
        <div class="resources-fenlei-name-wapper"><p>时间</p></div>
        <div class="resources-fenlei-item-wapper"
             v-for="(i, index) in 3" :key="i"
             :class="{'fenlei-active': timeindex === index}"
        >
          <p>2021</p>
        </div>
      </div>


    </div>
    <div style="width: 1px; height: 20px"></div>


  </div>


  <div class="resources-body-wapper">

    <div class="resources-body-top-wapper">

      <div class="resources-item-wapper"
        v-for="i in 10" :key="i"
      >

        <div class="resources-item-body-wapper">
          <div class="resources-item-image-wapper">

            <img class="resources-image" src="https://lz.sinaimg.cn/large/008kBpBlgy1gthyd2f6ppj605i07ndg202.jpg" alt="">

          </div>

          <div class="resources-item-info-wapper">
            <div class="resources-item-name-wapper">
              <p class="resources-item-name">魔法少女小圆剧场版 魔女之夜的回天</p>

            </div>

            <div class="resources-item-brief-introduction-wapper">

              <p >简介：<span class="resources-item-brief-introduction">《剧场版 魔法少女小圆 魔女之夜的回天》是由SHAFT负责制作的原创动画电影。该动画电影是动画《魔法少女小圆》系列的第4部剧场版动画，也是2013年剧场版动画《剧场版 魔法少女小圆 [新篇] 叛逆的物语》的正统续篇。 2021年4月25日，为纪念电视动画 《魔法少女小圆》开播10周年，官方宣布开始制作该动画电影，并发布先导预告与宣传海报。</span></p>

            </div>

            <div class="resources-item-label-wapper">
              <p>类型：<span class="resources-item-label" v-for="i in 4" :key="i">魔法</span></p>
            </div>

            <div class="resources-item-time-wapper">
              <p>时间：<span class="resources-item-time" >{{new Date().toLocaleDateString()}}</span></p>

            </div>

            <div class="resources-item-download-wapper">
              <div class="resources-item-download">
                <p>下载：<span class="download-number">{{100}}</span> </p>
              </div>
              <div class="download-button-wapper">
                <img src="@/assets/icon/download.svg" class="download-image">

              </div>
            </div>



          </div>
        </div>





      </div>



    </div>






  </div>





  <div style="height: 50px;" v-if="false">
    <pagination :pageNo="searchParams.pageNo" :pageSize="searchParams.pageSize" :total="total" :continue="5" @getPageNo="getPageNo"/>
  </div>

<!--  <div></div>-->
</div>
</template>

<script>
import pagination from "@/components/pagination/index.vue";
// import Pagination from '@/components/pagination/index.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "resources",
  components:{
    pagination
  },

  data() {
    return{

      fenleiindex: 0,
      timeindex: 0,



      total:50,
      searchParams: {
            // 分页的第几页
            pageNo: 1,
        // 每页的条数
        pageSize: 10,

  },
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

  methods:{
    getPageNo(pageNo){
      this.searchParams.pageNo = pageNo
      // this.getData()
    },
    // getData(){
    //
    // }

  }


}
</script>

<style scoped>


a{
  text-decoration: none;
}


.resources-wapper{
  width: 1000px;
  height: 100px;
  margin: 10px auto;
  /*background: white;*/
}
.resources-top-wapper{
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #E5E5E5;

}


.resources-fenlei-mingzi-wapper{
  display: flex;

  margin: 0 20px;
  font-size: 15px;
  border: 1px solid #D8D8D8;
  border-top: none;

}
.resources-fenlei-mingzi-wapper:nth-child(1){
  border-top: 1px solid #D8D8D8;
  /*background: #E5041E;*/
  /*font-size: 100px;*/
}



.resources-fenlei-name-wapper{
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: default;
  background-color: #F4F4F4;



}
.resources-fenlei-item-wapper{
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.fenlei-active{
  color: #E5041E;
}



.resources-body-top-wapper{
  display: flex;
  flex-flow:row wrap;
  /*!*display: inline-block;*!*/
  /*width: 1000px;*/
}

.resources-item-body-wapper{
  width: 495px;
  padding: 20px;
  box-sizing: border-box;
  /*margin-left: 10px;*/
  background: white;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #E5E5E5;
  display: flex;
  /*position: relative;*/
}

.resources-item-wapper{
  margin-left: 10px;
}

.resources-item-wapper:nth-child(2n+1){
  margin-left: 0;
}

.resources-body-wapper{
  /*display: flex;*/
}
.resources-item-image-wapper{
  position: relative;
  display: inline-block;
  margin-right: 20px;
}
.resources-image{
  width: 153px;
  height: 206px;
  position: relative;
}
.resources-item-body-wapper:hover
.resources-image{
  left: -2px;
  top: -2px;
}

.resources-item-info-wapper{
  display: inline-block;
}

.resources-item-name{
  font-size: 16px;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.resources-item-brief-introduction-wapper{
  height: 55px;
  margin-top: 20px;
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

}
.resources-item-brief-introduction{
  color: #666666;
}

.resources-item-label-wapper{
  margin-top: 6px;
  font-size: 12px;

}
.resources-item-label{
  color: #666666;
  margin-right: 5px;

}

.resources-item-time-wapper{
  font-size: 12px;
  margin-top: 5px;
}

.resources-item-time{
  color: #666666;
}
.resources-item-download-wapper{
  /*display: flex;*/
  margin-top: 9px;
}

.resources-item-download{
  width: 100px;
  display: inline-block;
}
.download-number{
  color: #666666;
  width: 100px;
}

.download-button-wapper{
  display: inline-block;
}
.download-image{
  width:25px;
  position: relative;
  top: 5px;
  cursor: pointer;
}

.download-image:active {
  content: url("@/assets/icon/download_hover.svg");

}




</style>