<template>
  <div class="creation-center-wapper">


    <div class="card-wapper">
      <p class="card-name">创作中心</p>
    </div>

    <div class="creation-center-top-wapper">
      <div class="creation-center-center-item">
        <router-link to="###">
          <img src="../../assets/icon/tougaoguanli.svg" class="creation-center-icon">
          <p class="creation-center-item-name">投稿管理</p>
        </router-link>
      </div>

      <div class="creation-center-center-item">
        <router-link to="###">
          <img src="../../assets/icon/yonghushensu.svg" class="creation-center-icon">
          <p class="creation-center-item-name">申诉管理</p>
        </router-link>
      </div>

      <div class="creation-center-center-item">
        <router-link to="###">
          <img src="../../assets/icon/shujvzhongxin.svg" class="creation-center-icon">
          <p class="creation-center-item-name">数据中心</p>
        </router-link>
      </div>


    </div>


    <div class="creation-center-center-wapper">

      <div class="xinlingjitang-wapper">

        <p class="xinlingjitang">&nbsp;&nbsp;在每秒5厘米的速度飘落的樱花雨中，在幸福的往事中，远野迈开了前进的道路。两个渐行渐远的背影，包含了有爱无缘的伤感，更多的却是对幸福未来的憧憬。</p>

      </div>

    </div>


    <div class="creation-center-botton-wapper">
      <router-link to="###">
        <div class="start-creation"> +开始创作 </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "CreationCenter"
}
</script>

<style scoped>
a{
  text-decoration: none;
}
a:hover{
  color: #E5041E;
}
.creation-center-wapper{
  width: 100%;
  height: 268px;
  box-sizing: border-box;
  padding: 0 14px;
  background-color: white;
  border-radius: 5px;

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
.creation-center-top-wapper{
  height: 55px;

}



.creation-center-center-wapper{
  height: 100px;
  width: 100% ;
  /*background-color: #666666;*/
  margin: 10px 0;
}


.xinlingjitang-wapper{
  height: 100%;
  background-color: #F9F9FB;
  padding: 5px;
  box-sizing: border-box;
}
.xinlingjitang{
  color: #666666;
  font-size: 12px;
}

.creation-center-center-item{
  display: inline-block;
  width: 33.3%;
  text-align: center;
}

.creation-center-icon{
  width: 30px;
  height: 30px;
}
.creation-center-item-name{
  font-size: 12px;
}

.start-creation:hover{
  color: #E5041E;
}

.start-creation{
  width: 230px;
  margin: 0 auto;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  border: 1px  #E5041E solid;
  color: #666666;
}

</style>