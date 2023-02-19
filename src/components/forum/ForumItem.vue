<template>
  <div class="forum-item-wapper">
    <div class="forum-item-left-wapper">
      <div class="avatar-wapper">
        <router-link to="###">
          <img class="avatar" src="http://121.36.210.108/static/shenshanshi/image/avatar/shenshanshi.jpg" alt="">
        </router-link>
      </div>
    </div>
    <div class="forum-item-right-wapper">

      <div class="user-info">

        <router-link to="###">
          <div class="user-name">梦太远、你可会来？</div>
        </router-link>
        <div class="last-time">24分钟前</div>
      </div>

      <div class="info-wapper">


      </div>



      <div class="botton-wapper">

        <div class="botton-iten-wapper">
          <img class="botton-icon" src="../../assets/icon/dianzan.svg" alt="">
          <p>点赞</p>
        </div>
        <div class="botton-iten-wapper" @click="pinglun">
          <img class="botton-icon" src="../../assets/icon/pinglun.svg" alt="">
          <p>评论</p>
        </div>
        <div class="botton-iten-wapper" >
          <img class="botton-icon" src="../../assets/icon/shoucang.svg" alt="">
          <p>收藏</p>
        </div>

      </div>

    </div>

    <div v-if="isPinglun">

      <Comment></Comment>
    </div>


  </div>
</template>

<script>
import Comment from "@/components/comment/Comment";
export default {
  name: "ForumItem",
  components:{Comment},
  data(){
    return{
      isPinglun:false,
    }
  },
  methods:{
    pinglun(){
      this.isPinglun = !this.isPinglun;
      // console.log(this.isPinglun);
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

.forum-item-wapper{
  width: 100%;
  /*height: 300px;*/
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  margin-top: 10px;
}

.forum-item-left-wapper{
  width: 40px;
  /*height: 100px;*/
  position: absolute;
}
.forum-item-right-wapper{

  padding-left: 50px;
  /*background-color: #b3d4fc;*/
  box-sizing: border-box;
  padding-bottom: 10px;
}
.avatar-wapper{
  /*margin-top: 10px;*/
}

.avatar{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}


.user-name{
  color: #222222;
  font-size: 13px;
  font-weight: 600;
}
.user-name:hover{
  /*color: #40C5F1;*/
}
.last-time{
  font-size: 12px;
}

.botton-wapper{
  /*width: 100%;*/
  display: flex;

}


.botton-iten-wapper{

  display: flex;
  cursor: pointer;
  color: #85898E;
  height: 20px;
  line-height: 20px;
  margin-left: 100px;
  /*background-color: #85898E;*/
}
.botton-iten-wapper:nth-child(1){
  margin-left: 0;
}
.botton-icon{
  width: 20px;
  height: 20px;
  margin-right: 2px;
}


.info-wapper{
  /*width: 600px;*/
  height: 100px;
  /*background-color: #b3d4fc;*/
  display: inline-block;
}
</style>