<template>
  <div class="forum-wapper">




    <div class="forum-left-wapper">

      <div class="forum-left-top-wapper">
        <div class="forum-menu-list">
          <div v-for="meun in fenleis"
               :key="meun.key"
               class="forum-menu-item"
               :class="{'forum-menu-active' : xuanze === meun.key}"
               v-on:click="onClickXuanzhe(meun.key)">

            <p>{{meun.name}}</p>


          </div>
        </div>


      </div>

      <div class="forum-left-bottom-wapper">

        <div v-for="post in posts" :key="post.postId" class="forum-menu-item-wapper">

          <ForumItem :post="post"></ForumItem>

        </div>
      </div>


    </div>

    <div class="forum-right-wapper"  >

      <CreationCenter></CreationCenter>
      <RecommendFollow></RecommendFollow>

    </div>

  </div>

</template>

<script>
import CreationCenter from "@/components/creationcenter/CreationCenter";
import RecommendFollow from "@/components/recommendfollow/RecommendFollow";
import ForumItem from "@/components/forum/ForumItem";
import {getpost} from "@/api/forum/post";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components:{CreationCenter, RecommendFollow, ForumItem},
  data(){
    return{

      fenleis : [
        {
          name : "推荐",
          key: "recommend"
        } ,{
          name : "热门",
          key: "hot"
        } ,{
          name : "关注",
          key: "follow"
        } ,
      ],
      xuanze: "recommend",

      posts:[]
    }


  },

  computed: {

  },
  methods:{

    async onClickXuanzhe(key){
      this.xuanze = key
      ///调用后端接口
      let result = await getpost(key)
      if (result.code === 200){
        this.posts = result.data
      }

    }
  },
  mounted() {

    this.onClickXuanzhe(this.xuanze)
  }
}
</script>

<style scoped>

a{
  text-decoration: none;
}

.forum-wapper{
  width: 1000px;
  display: flex;
  /*position: relative;*/
  margin: 10px auto 0 auto;
}

.forum-left-wapper{

  width: 694px;
  margin-right: 10px;


  /*background-color: #b3d4fc;*/
  /*height: 1000px;*/
  /*float: left;*/
  /*height: 100%;*/


}

.forum-right-wapper{
  width: 296px;
  height: 100%;

  /*background-color: #b3d4fc;*/
  position: sticky;
  top: 0;
  /*top: -100px;*/
  /*bottom: 80px;*/
  /*bottom: -80px;*/
  /*float: right;*/
  /*overflow: scroll;*/
  /*height: 200px;*/
  /*position: fixed;*/
  /*position: absolute;*/
  /*left: 694px;*/
  /*margin-left: 10px;*/
  /*overflow: hidden;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*background-color: white;*/
  /*height: 1000px;*/
  /*background-color: #b3d4fc;*/
  /*!*left: 20px;*!*/
  /*height: 1000px;*/
  /*left: 1000px;*/

}


.forum-left-top-wapper{
  width: 100%;
  height: 44px;
  background-color: white;
  border-radius: 5px;


}

.forum-left-bottom-wapper{
  margin-top: 10px;
  /*background-color: white;*/
  /*height: 500px;*/
}

.forum-menu-list{
  height: 44px;
  display: table-cell;
  vertical-align:middle;
}

.forum-menu-item{

  display: inline-block;
  width: 80px;
  height: 20px;
  margin-right: 10px;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
}

.forum-menu-active{
  color: #E5041E;
}









</style>