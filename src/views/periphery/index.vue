<template>
  <div class="periphery-wapper">

    <div class="periphery-top-wapper" v-if="true">




      <div style="width: 1px; height: 20px"></div>
      <div class="periphery-chose-wapper clearfix">

        <div class="periphery-chose">
          <div  class="chose" :class="{'chose-active' : chose}" v-on:click="chose = true" >漫展演出</div>
        </div>
        <div class="periphery-chose">
          <div class="chose" :class="{'chose-active' : !chose}" v-on:click="chose = false">本站周边</div>
        </div>

      </div>




      <div class="periphery-fenlei-wapper" v-if="chose">

        <div class="fenlei-wapper">
          <div class="leixingming">城市</div>
          <div v-for="(leixing, index) in citys" :key="leixing"
               class="leixing-item"
               :class="{'leixing-item-active' : leixingindex === index}"
              v-on:click="choseLeiXing(index)"
          >
            <span>{{ leixing }}</span>
          </div>

        </div>
        <div class="fenlei-wapper">
          <div class="leixingming">类型</div>
          <div v-for="(leixing, index) in displayleixings" :key="leixing"
               class="leixing-item"
               :class="{'leixing-item-active' : saixuanindex === index}"
               v-on:click="choseSaiXuan(index)"
          >
            <span>{{ leixing }}</span>
          </div>

        </div>

        <div class="fenlei-wapper">
          <div class="leixingming">时间</div>
          <div v-for="(leixing, index) in times" :key="leixing"
               class="leixing-item"
               :class="{'leixing-item-active' : saixuanindex === index}"
               v-on:click="choseSaiXuan(index)"
          >
            <span>{{ leixing }}</span>
          </div>

        </div>

      </div >


      <div class="periphery-fenlei-wapper" v-else>

        <div class="fenlei-wapper">
          <div class="leixingming">分类</div>
          <div v-for="(leixing, index) in leixings" :key="leixing"
               class="leixing-item"
               :class="{'leixing-item-active' : leixingindex === index}"
               v-on:click="choseLeiXing(index)"
          >
            <span>{{ leixing }}</span>
          </div>

        </div>
        <div class="fenlei-wapper">
          <div class="leixingming">筛选</div>
          <div v-for="(leixing, index) in saixuans" :key="leixing"
               class="leixing-item"
               :class="{'leixing-item-active' : saixuanindex === index}"
               v-on:click="choseSaiXuan(index)"
          >
            <span>{{ leixing }}</span>
          </div>

        </div>
      </div >



      <div style="width: 1px; height: 20px"></div>
    </div>




    <div class="periphery-item-wapper">

<!--      <router-view></router-view>-->
      <div v-if="chose">
        <Display></Display>
      </div>
      <div v-else>
        <PeripheryItem></PeripheryItem>
      </div>



    </div>

  </div>
</template>

<script>

import Display from "@/views/periphery/display";
import PeripheryItem from "@/views/periphery/peripheryitem";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Periphery",
  components:{Display, PeripheryItem},
  data(){
    return{

      chose: true,
      // 手办 公式设定集 官方漫画 景品
      leixings: ["文创文具", "服饰鞋包", "日用品", "3c数码", "耳机", "键盘鼠标", "毛绒玩偶", "卡牌", "比例手办", "景品"],
      saixuans: ["综合", "销量", "价格"],
      leixingindex: 0,
      saixuanindex: 0,

      citys:["全国", "成都", "北京", "上海", "武汉", "沈阳", "深圳", "重庆", "厦门" ],
      displayleixings:["全部类型", "演出", "展览", "本地生活" ],
      times:["全部时间", "本周", "本月" ]

    }
  },
  methods:{

    choseLeiXing(index){
      this.leixingindex = index
    },
    choseSaiXuan(index){
      this.saixuanindex = index
    },

  }
}
</script>

<style scoped>
.periphery-wapper{
  /*background-color: white;*/
  width: 1000px;
  margin: 10px auto;
  /*text-align: center;*/
  /*overflow: hidden;*/

}

.periphery-top-wapper{
  background-color: white;
  box-shadow: 2px 2px 5px #E5E5E5;
  border-radius: 5px;

}

a{
  text-decoration: none;
}
.periphery-chose-wapper{

  background-color: #E9DBDB;
  width: 220px;
  margin: 0 auto;
  border-radius: 5px;
}
.clearfix::before,
.clearfix::after
{
  content: '';
  display: block;
  clear: both;
}


.periphery-chose{
  display: inline-block;
  width: 90px;
  height: 35px;
  line-height: 35px;
  margin: 10px;
  background-color: white;
  border-radius: 4px;
  color: #C2BCBC;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
.periphery-chose>a:hover{
  color: black;
}
.chose-active{
  color: black;
}


.fenlei-wapper{

  display: flex;
  margin: 0 20px ;
  font-size: 15px;
  border: 1px solid #D8D8D8;
  border-top: none;
}
.fenlei-wapper:nth-child(1){
  border-top: 1px solid #D8D8D8;
  margin-top: 20px;
}


.leixingming{
  background-color: #F4F4F4;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: default;
}
.leixing-item{
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.leixing-item-active{
  color: #E5041E;
}

</style>