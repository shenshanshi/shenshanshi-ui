<template>
  <div class="follow-item-wapper">

    <div class="follow-item-left-wapper">
      <img  src="http://121.36.210.108/static/shenshanshi/image/avatar/shenshanshi.jpg" class="follow-avatar">
    </div>
    <div class="follow-item-center-wapper">

      <p class="follow-name">梦太远、你可会来？</p>
      <p class="follow-fenlei">999粉丝&nbsp;.&nbsp;20篇文章</p>
    </div>
    <div class="follow-item-right-wapper">
      <router-link to="###">
        <div class="follow-button-wapper">
          <div>+</div>
          <div>关注</div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "FollowItem"
}
</script>

<style scoped>

a{
  text-decoration: none;
}

.follow-item-wapper{
  width: 100%;
  height: 50px;
  /*background-color: #F9F9FB;*/
  /*display: flex;*/

}
.follow-item-left-wapper{
  width: 40px;
  height: 100%;
  /*display: table-cell;*/
  box-sizing: border-box;
  padding: 5px 0;
  float: left;
  /*background-color: #85898E;*/
}

.follow-item-center-wapper{
  width: 150px;
  height: 100%;
  /*background-color: #E5041E;*/
  box-sizing: border-box;
  padding: 0 10px;
  float: left;

}

.follow-item-right-wapper{

  height: 100%;
  float: right;
}


.follow-avatar{
  width: 40px;
  height: 40px;
  border-radius: 20px;

}


.follow-name{
  margin-top: 5px;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
  font-weight: 600;
}


.follow-fenlei{
  font-size: 12px;
  color: #A1A1A1;
}

.follow-button-wapper{
  display: flex;
  /*background-color: #85898E;*/
  height: 25px;
  line-height: 25px;
  margin: 15px 0;
  /*border: 1px silver solid;*/
  padding: 0 10px;
  background-color: #00AEEC;
  border-radius: 5px;
  color: white;
}

.follow-button-wapper:hover{
  background-color: #40C5F1;
}
</style>