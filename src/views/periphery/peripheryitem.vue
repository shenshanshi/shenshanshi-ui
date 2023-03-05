<template>
  <div class="periphery-wapper">

    <div>

      <table class="table-wapper">

        <tr v-for="i in 15" :key="i" class="tr-wapper">

          <td v-for="ii in 4" :key="ii" class="td-wapper">

            <div class="shop-wapper">

              <div class="shop-image-wapper">
                <img class="shop-image" src="https://img.alicdn.com/imgextrahttps://img.alicdn.com/imgextra/i4/2324040146/O1CN01Jssljm1CwucaU5bWG_!!2324040146-0-alimamacc.jpg_468x468q75.jpg_.webp">

              </div>

              <div class="shop-name-wapper">
                <p class="shop-name">孤独摇滚挂件后藤一里山田凉亚克力钥匙扣挂饰动漫二次元周边手办</p>
              </div>

              <div class="shop-price-wapper">

                <p class="shop-price">¥<span class="price">{{25}}</span></p>

              </div>
              
              <div class="shop-dianpu-wapper">

                  <img class="shop-dianpu-tubiao" src="@/assets/icon/dianpu.svg" alt="">
                  <span class="shop-dianpu-name">孤独摇滚官方旗舰店</span>
              </div>

            </div>
          </td>

        </tr>



      </table>

    </div>




  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PeripheryItem"
}
</script>

<style scoped>

.periphery-wapper{
  margin-top: 10px;
  background-color: white;
  box-shadow: 2px 2px 5px #E5E5E5;
  border-radius: 5px;

}

.tr-wapper{
  /*position: relative;*/
}

.td-wapper{

  /*width: 240px;*/
  box-sizing: border-box;
  /*height: 350px;*/
  /*border: 1px silver solid;*/

  border: 1px solid #D8D8D8;

}

.td-wapper:hover{
  position: absolute;
  border: 1px #E5041E solid;
}

.shop-wapper{

  width: 209px;
  /*height: 310px;*/
  margin: 20px;
  /*background: #85898E;*/

}

.shop-image{
  width: 209px;
  height: 209px;
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
.shop-dianpu-tubiao{
  width: 15px;
  height: 15px;
}
.shop-dianpu-name{
  margin-left: 5px;
  font-size: 12px;
  /*padding-bottom: 15px;*/
  color: #85898E;
  position: absolute;
  top: -1px;

}


</style>