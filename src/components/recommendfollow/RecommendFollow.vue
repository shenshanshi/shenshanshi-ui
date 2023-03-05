<template>
  <div class="recommend-follow-wapper">
    <div class="card-wapper">
      <p class="card-name">推荐关注</p>
    </div>


    <div>
      <div class="follow-iten" v-for="(item, index) in follows" :key="index">
        <FollowItem :account-id="item.beFollow"></FollowItem>
      </div>
    </div>

  </div>


</template>

<script>
import FollowItem from "@/components/forum/FollowItem";
import {getRecommendAccount} from "@/api/account/follow";
export default {
  name: "RecommendFollow",
  components:{FollowItem},
  data(){
    return{
      follows:[]
    }
  },
  methods:{
    async getFollow(){

      let result = await getRecommendAccount()
      // console.log(result);
      if (result.code === 200){
        // alert(200)
        this.follows = result.data
        console.log(this.follows);
      }else{
        // alert(500)
      }
    }
  },

  mounted() {
    this.getFollow()
  }


}
</script>

<style scoped>
.recommend-follow-wapper{

  width: 100%;
  /*height: 500px;*/
  box-sizing: border-box;
  padding: 0 14px 20px 14px;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #E5E5E5;

}


.card-wapper{
  height: 50px;
  display: table-cell;
  vertical-align:middle;

}
.card-name{
  font-size: 14px;
  font-weight: 400;
  /*line-height: 52px;*/
  /*padding-top: 20px;*/

}

.follow-iten{
  margin-top: 10px;
}

.follow-iten:nth-child(1){
  margin-top: 0;
}

</style>