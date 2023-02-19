<template>
  <div class="forum-wapper">


    <div class="forum-left-wapper">

      <div class="forum-left-top-wapper">
        <div class="forum-menu-list">
          <div v-for="meun in forumMenus" :key="meun.name" class="forum-menu-item">
            <router-link active-class="meun-active" :to="{name: meun.urlName}" >
              <p class="forum-menu-name">{{meun.name}}</p>
            </router-link>
          </div>
        </div>


      </div>

      <div class="forum-left-bottom-wapper">
        <router-view></router-view>
      </div>


    </div>

    <div class="forum-right-wapper" :style="{top: top + 'px'}" >

      <CreationCenter></CreationCenter>
      <RecommendFollow></RecommendFollow>

    </div>

  </div>

</template>

<script>
import CreationCenter from "@/components/creationcenter/CreationCenter";
import RecommendFollow from "@/components/recommendfollow/RecommendFollow";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components:{CreationCenter, RecommendFollow},
  data(){
    return{
      top: 0,
      forumMenus:[
        {
          name:"推荐",
          urlName:"recommend",
        },
        {
          name:"热门",
          urlName:"hot",
        },
        {
          name:"关注",
          urlName:"follow",
        },
      ]
    }


  },
 beforeCreate() {
    // var clientHeight = window.innerHeight;


   // var height = document.getElementsByClassName("forum-right-wapper").scrollHeight;

   // console.log(clientHeight);
   // console.log(height);
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
}


.forum-menu-name:hover{
  background-color: #E5041E;
  color: white;

}
.meun-active>.forum-menu-name{
  color: #E5041E;
}


.forum-menu-name{

  margin: 0 4px;
  padding: 5px;
  height: 20px;
  text-align: center;
  font-size: 14px;
  border-radius: 15px;
  color: #222222;
  font-weight: 600;

}




</style>