<template>
  <div class="forum-item-wapper">

<!--    {{postVo}}-->

    <div class="forum-item-left-wapper">
      <div class="avatar-wapper">
        <router-link to="###">
          <img class="avatar" :src="account.avatar" alt="">
        </router-link>
      </div>
    </div>


    <div class="forum-item-right-wapper">

      <div class="user-info">

        <router-link to="###">
          <div class="user-name">{{account.accountName}}</div>
        </router-link>
        <div class="last-time">{{post.createTime}}</div>
      </div>

      <div class="info-wapper">

        {{post.postContent}}


      </div>



      <div class="botton-wapper">

        <div class="botton-iten-wapper"  >
          <div v-on:click="dianzan">
            <img class="botton-icon" src="@/assets/icon/dianzan.svg" alt="" v-if="!isDianzan" >
            <img class="botton-icon" src="@/assets/icon/dianzan_active.svg" alt="" v-else >
          </div>
          <p>&nbsp;{{post.like}}</p>
        </div>
        <div class="botton-iten-wapper" >
          <div @click="pinglun">
            <img class="botton-icon" src="@/assets/icon/pinglun.svg" alt="" v-if="!isPinglun">
            <img class="botton-icon" src="@/assets/icon/pinglun_active.svg" alt="" v-else>
          </div>

          <p>&nbsp;{{reviewCount}}</p>
        </div>
        <div class="botton-iten-wapper" >
          <div v-on:click="shouchang">
            <img class="botton-icon" src="@/assets/icon/shoucang.svg" alt="" v-if="!isShoucang">
            <img class="botton-icon" src="@/assets/icon/shoucang_active.svg" alt="" v-else>
          </div>

          <p>&nbsp;{{post.collect}}</p>
        </div>

      </div>

    </div>

    <div v-show="isPinglun">

      <Comment :post-id="post.postId"></Comment>
    </div>


  </div>
</template>

<script>
import Comment from "@/components/comment/Comment";
import {getAccountById} from "@/api/account/account";
import {getReviewCountByPostId} from "@/api/forum/review";

export default {
  name: "ForumItem",
  components:{Comment},
  props: ["post"],
  data(){
    return{
      isPinglun:false,
      isDianzan:false,
      isShoucang:false,

      account:{},

      reviewCount:0,


    }
  },
  methods:{
    pinglun(){
      this.isPinglun = !this.isPinglun;
      this.getReviewCount(this.post.postId)

    },

    dianzan(){
      this.isDianzan = !this.isDianzan
    },

    shouchang(){
      this.isShoucang = !this.isShoucang
    },

    async getAccount(){
      // console.log(this.post.accountId);
      let result = await getAccountById(this.post.accountId)
      if (result.code === 200){
        this.account = result.data
      }
    },

    async getReviewCount(postId){

      let result = await  getReviewCountByPostId(postId);
      if (result.code === 200){
        this.reviewCount = result.data
        // console.log(this.reviewCount);
      }

    }

  },

  mounted() {

    this.getAccount()
    this.getReviewCount(this.post.postId)


  },
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
  color: #666666;

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