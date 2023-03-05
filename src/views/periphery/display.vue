<template>
  <div class="display-wapper">

    <div class="display-event-wapper">




          <div class="td-wapper" v-for="i in 10" :key="i">

            <div class="event-wapper">

              <div class="event-image-wapper">
                <img  class="event-image" src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN019EtZi02GdSS2LQi3o_!!2251059038.png_q60.jpg_.webp" alt="">
              </div>

              <div class="event-info-wapper">


                <div class="event-name-wapper">
                  <p class="event-name">【上海】 【京都动画X 春日计划】「漫展感」管弦室内乐音乐会——《过去 未来 现在》</p> 
                </div>
                <div class="event-time-wapper">
                  <img src="@/assets/icon/shijian.svg" class="event-time-icon">
                  <span class="event-time">{{new Date().toLocaleString()}}</span>
                </div>
                <div class="event-didian-wapper">
                  <img src="@/assets/icon/didian.svg" class="event-time-icon">
                  <span class="event-didian">{{"上海 | 上海大宁剧院"}}</span>
                </div>

                <div class="event-price-wapper">

                  <div class="event-price">¥<span class="price">{{828}}</span></div>

                  <div class="event-status-active" v-if="true">售票中</div>
                  <div class="event-status-stop" v-else>售票结束</div>


                </div>

                


              </div>




            </div>


          </div>


    </div>




















  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Display",
  data(){
    return{


    }
  }


}
</script>

<style scoped>

.display-wapper{
  margin-top: 10px;
  /*background-color: white;*/
  /*box-shadow: 2px 2px 5px #E5E5E5;*/
  border-radius: 5px;

}

.td-wapper{
  width: 495px;
  margin-left: 10px;
  display: inline-block;
  background: white;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #E5E5E5;

}

.td-wapper:nth-child(2n+1){
  margin-left: 0;

}






.event-wapper{
  padding: 20px;
  display: flex;
  position: relative;
}
.event-image-wapper{
  margin-right: 20px;
  position: relative;
}
.event-image{
  width: 153px;
  height: 206px;
  /*margin: 20px;*/
  position: relative;

}

.event-wapper:hover .event-image{
  left: -2px;
  top: -2px;
}





/*.event-info-wapper{*/
/*  display: inline-block;*/
/*}*/

.event-name{
  font-size: 16px;
  height: 45px;
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
}




.event-time-icon{
  width: 22px;

}

.event-time-wapper{
  position: relative;
  margin-top: 40px;
}
.event-time{

  top: 1px;
  left: 25px;
  position: absolute;
  font-size: 14px;
  color: #999999;
}
.event-didian-wapper{
  position: relative;
}

.event-didian{
  top: 1px;
  left: 25px;
  position: absolute;
  font-size: 14px;
  color: #999999;
}

.event-price-wapper{
  margin-top: 30px;
  position: absolute;
  bottom: 20px;
}
.event-price{
  font-size: 20px;
  color: #E5041E;
  display: inline-block;
}
.price{
  margin-left: 3px;
}

.event-status-active,
.event-status-stop{

  display: inline-block;
  margin-left: 20px;
  color: #666666;
  font-size: 14px;
  margin-bottom: 0;
  position: relative;
  bottom: 2px;
}

</style>