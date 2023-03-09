<template>
  <div class="periphery-wapper">

    <div>

      <table class="table-wapper">

        <div v-for="goods in goodsList" :key="goods.goodsId" class="goods-wapper"  >

<!--          <td v-for="index2 in 4" :key="index1 * 4 + index2" class="td-wapper" >-->

            <div class="shop-wapper">

              <div class="shop-image-wapper">
                <img class="shop-image" :src="goods.picture">

              </div>

              <div class="shop-name-wapper">
                <p class="shop-name">{{goods.name}}</p>
              </div>

              <div class="shop-price-wapper">

                <p class="shop-price">¥<span class="price">{{goods.price}}</span></p>

              </div>

              <div class="shop-dianpu-wapper">

<!--                  <img class="shop-dianpu-tubiao" src="@/assets/icon/dianpu.svg" alt="">-->
<!--                  <span class="shop-dianpu-name">孤独摇滚官方旗舰店</span>-->

                <p class="xiaoliang-wapper">销量：<span class="xiaoliang">{{goods.sales}}</span></p>
              </div>

            </div>
<!--          </td>-->

        </div>



      </table>

    </div>




  </div>

</template>

<script>
import {getGootsList} from "@/api/periphery/goods";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PeripheryItem",
  props: ['leixing', 'saixuan'],
  data(){
    return{
      goodsList:[],
      pageNum: 1,
      pageSize: 16
    }
  },
  methods:{
    async getGoos(type, saixuan){

      const prarm = {
        pageNum : this.pageNum,
        pageSize :this.pageSize,
        isAsc: "asc"
      }
      if (type && type !== "全部"){
        prarm.type = type
      }
      if (saixuan === "销量"){
        prarm.orderByColumn = "sales"
      }else if(saixuan === "价格"){
        prarm.orderByColumn = "price"
      }


      let result = await getGootsList(prarm);
      if (result.code === 200){
        this.goodsList = result.rows
      }
    }
  },
  created() {
    this.getGoos(this.leixing, this.saixuan)
  }


}
</script>

<style scoped>

.periphery-wapper{
  /*width: 1000px;*/
  margin-top: 10px;
  background-color: white;
  box-shadow: 2px 2px 5px #E5E5E5;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;

}

.goods-wapper{
  width: 240px;
  display: inline-block;
  border: 1px solid #D8D8D8;
  box-sizing: border-box;
  padding: 20px;
}
.goods-wapper:hover{
  border: 1px #E5041E solid;
}




.shop-image{
  width: 200px;
  height: 200px;
  position: relative;
}

.shop-image:hover{
  width: 198px;
  height: 198px;
  top: 1px;
  left: 1px;
}

.shop-name{
  font-size: 14px;
  color: #666666;
  height: 40px;

  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
}

.shop-price{
  font-size: 20px;
  color: #E5041E;
}
.price{
  margin-left: 3px;
}
.shop-dianpu-wapper{
  position: relative;
}
/*.shop-dianpu-tubiao{*/
/*  width: 15px;*/
/*  height: 15px;*/
/*}*/
/*.shop-dianpu-name{*/
/*  margin-left: 5px;*/
/*  font-size: 12px;*/
/*  !*padding-bottom: 15px;*!*/
/*  color: #85898E;*/
/*  position: absolute;*/
/*  top: -1px;*/

/*}*/

.xiaoliang-wapper{
  color: #666666;
}

</style>
