<template>
  <div class="animation-info-wapper">

    <div class="info-top-wapper">

      <div class="top-left-wapper">
        <img :src="cover" class="animation-cover">
      </div>
      <div class="top-right-wapper">
        <div class="animation-name">{{name}}</div>

        <div class="animation-item">
          <span class="animation-key">别名:</span>
          <span class="animation-value">SPY×FAMILY</span>
        </div>

        <div class="animation-item">
          <span class="animation-key">上映:</span>
          <span class="animation-value">2022-04-09</span>
        </div>

        <div class="animation-item">
          <span class="animation-key">原作:</span>
          <span class="animation-value">紙城境介</span>
        </div>


        <div class="animation-item">
          <span class="animation-key">制作公司:</span>
          <span class="animation-value">a1 </span>
        </div>

        <div class="animation-item">
          <span class="animation-key">地区:</span>
          <span class="animation-value">日本</span>
        </div>

        <div class="animation-item">
          <span class="animation-key">类型:</span>
          <span class="animation-value">搞笑 </span>
          <span class="animation-value">治愈 </span>
        </div>

        <div class="animation-item">
          <span class="animation-key">标签:</span>
          <span class="animation-value">TV </span>
          <span class="animation-value">治愈 </span>
          <span class="animation-value">完结 </span>
        </div>
        <div class="animation-item">
          <span class="animation-key">更新至:</span>
          <span class="animation-value">第12集（完结） </span>
        </div>


      </div>


    </div>

    <CompleteWorks></CompleteWorks>

    <div class="info-center-wapper">

      <video class="animation-video" controls=""  name="media">
        <source :src="url" type="video/mp4">
      </video>

    </div>

    <Comment></Comment>

  </div>
</template>


<script>
import CompleteWorks from "@/components/completeworks/CompleteWorks";
import Comment from "@/components/comment/Comment";
export default {
  name: "AnimationInfo",
  components:{CompleteWorks, Comment},
  data(){
    return{
      name:"间谍过家家",
      aliasName: "SPY×FAMILY",
      cover:"http://121.36.210.108/static/shenshanshi/image/cover/jiandieguojiajia.jpg",
      url:"http://121.36.210.108/static/shenshanshi/video/FatestaynightHF3.mp4"
    }
  }
}
</script>

<style scoped>


.animation-info-wapper{
  width: 1000px;
  margin: 20px auto;
}

.info-top-wapper{
  display: flex;
}
.top-left-wapper{
  width: 198px;
  height: 275px;
  overflow: hidden;
}


.animation-cover{
  width: 198px;
  height: 275px;
}


/*上右边*/

.top-right-wapper{
  margin-left: 20px;
  height: 275px;
}

.animation-name{
  font-size: 25px;
  line-height: 35px;
}

.animation-item{

  font-size: 14px;
  margin-top: 9px;

}

.animation-key{
  color: #555555;
  margin-right: 10px;

}
.info-center-wapper{
  width: 1000px;
  margin-top: 20px;
}

.animation-video{
  width: 1000px;
  /*height: 666.66px;*/
  background-color: black;
}



</style>