<template>
  <div class="comment-wapper">



    <div class="sort-wapper">
      <p class="sort-item" :class="{'sort-active': chose}" v-on:click="hotSort">按热度排行</p>
      <p class="sort-item" :class="{'sort-active': !chose}" v-on:click="timeSore">按时间排行</p>

    </div>

    <div class="review-wapper">
      <div v-for="review in reviews" :key="review.reviewId">
        <CommentItem :review="review"></CommentItem>
      </div>

    </div>






  </div>
</template>

<script>

import CommentItem from "@/components/comment/CommentItem";
import {getReviewByPostId} from "@/api/forum/review";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Comment",
  props:["postId"],
  data(){
    return{
      chose:true,
      reviews:[],
    }
  },
  components:{CommentItem},

  methods:{

    async getReview(){
      let result = await getReviewByPostId(this.postId)
      if (result.code === 200){
        this.reviews = result.data
        this.hotSort()
        this.chose = true
      }
    },


    hotSort(){
      this.reviews = this.reviews.sort((a, b) => {a.like > b.like});
      this.chose = true
    },

    timeSore(){
      this.reviews = this.reviews.sort((a, b) => {a.createTime < b.createTime});
      this.chose = false


    }


  },
  mounted() {
    this.getReview()
  }

}
</script>

<style scoped>

.comment-wapper{
  margin-top: 10px;
  /*background-color: white;*/
  /*border-radius: 20px;*/
  padding: 0 20px;
}
.sort-wapper::after{
  content: '';
  width: 100%;
  height: 1px;
  display: block;
  /*margin: 0 auto;*/
  margin-top: -1px;
  margin-bottom: 10px;
  background-color: #E5E9EF;
  border-radius: 30px;
}
.sort-item{
  display: inline-block;
  /*margin-left: 50px;*/
  cursor: pointer;
  width: 70px;
  text-align: center;
}
.sort-item:nth-child(2){
  margin-left: 20px;
}

.sort-active{
  color: #E5041E;
  position: relative;
}

.sort-active::after{
  content: "";
  width: 100%;
  text-align: center;
  background-color: #E5041E;
  display: block;
  /*visibility: hidden;*/
  margin-top: 5px;
  height: 1px;
  clear: both;
  font-size: 0;
}
.sort-active::before{
  content: "";
  width: 0;
  height: 0;
  /*text-align: center;*/
  border-left: 4px white solid;
  border-right: 4px white solid;
  /*border-top: 5px white solid;*/
  border-bottom: 4px #E5041E solid;
  position: absolute;
  bottom: 0;
  /*margin: 0 auto;*/
  /*top: 5px;*/
  left: 31px;
  /*right: auto;*/
  display: block;
  /*background-color: #E5041E;*/
  background-color: #85898E;
}





</style>