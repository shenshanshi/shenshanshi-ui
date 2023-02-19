<template>
  <div class="comment-item-wapper">
    <div class="comment-left">

      <img class="avatar" :src="avatarUrl">

    </div>
    <div class="comment-right">

      <div class="cengzhu-wapper">
        <div>
          <p class="username">{{username}}</p>
          <p class="neirong">{{neirong}}</p>
        </div>

        <div class="cengzhu-botton-wapper">
          <div>
            <p>{{new Date().toLocaleString()}}</p>
          </div>
          <div>
            <p><img class="cengzhu-botton-icon" src="../../assets/icon/dianzan.svg" alt=""></p>
            <p>1</p>
          </div>


          <div>
            <p><img class="cengzhu-botton-icon" src="../../assets/icon/cai.svg" alt=""></p>
            <p>1</p>
          </div>

          <div>
            <p class="huifu">回复</p>
          </div>
        </div>

      </div>


      <div class="qitaren">




      </div>


    </div>

    <div>



    </div>

  </div>
</template>

<script>
export default {
  name: "CommentItem",
  data(){
    return{

      username:"梦太远、你可会来？",
      neirong:"如果你觉得 ES 的 JavaAPI 中的高级文档查询很难用，不妨稍微封装一下，把繁琐的过程封装了一下更能凸显本质。\n" +
          "笔记地址：https://luzhenyu.blog.csdn.net/article/details/123411411\n" +
          "代码：https://gitee.com/szluyu99/elastic-search-learn/blob/master/es_java_api/src/main/java/com/yu/es/test/doc/QueryDoc.java",
      avatarUrl: "http://121.36.210.108/static/shenshanshi/image/avatar/shenshanshi.jpg",

    }
  }
}
</script>

<style scoped>

.comment-item-wapper{
  display: flex;
}

.comment-left{
  width: 40px;
  margin-right: 10px;
  /*background-color: #b3d4fc;*/
}

.avatar{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.comment-right{
  /*background-color: #F1F1F1;*/
  width: 100%;
  /*height: 200px;*/
}

.comment-right::after{
  content: '';
  width: 100%;
  height: 1px;
  display: block;
  /*margin: 0 auto;*/
  /*margin-top: -1px;*/
  margin-bottom: 10px;
  background-color: #E5E9EF;
  border-radius: 30px;
  margin-top: 15px;
}

.username{
  color: #222222;
  font-size: 13px;
  font-weight: 600;
  margin: 5px 0;
}

.neirong{
  color: #222;
  /*font-weight: 400;*/
  font-size: 13px;
}

.cengzhu-botton-wapper{
  display: flex;
  color: #9499A0;
}

.cengzhu-botton-wapper>div{
  margin-right: 20px;
  display: flex;

}

.cengzhu-botton-icon{
  width: 17px;
  height: 17px;
  margin-right: 3px;
  cursor: pointer;
}

.huifu{
  cursor: pointer;
}

</style>