<template>
  <div class="novel-wapper">

    <div class="cover-wapper">
      <img :src="novelUrl" class="cover">
    </div>
    <div class="name-wapper">
      <router-link to="###">
        <p class="name">{{novelName}}</p>
      </router-link>
      <router-link to="###">
        <p class="brief">{{novelBrief}}</p>
      </router-link>

      <p class="author">{{novelAuthor}}</p>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeNovel",
  data(){
    return{
      novelUrl:"http://121.36.210.108/static/shenshanshi/image/cover/daomubiji.jpg",
      novelName:"盗墓笔记",
      novelAuthor:"南派三叔",
      novelBrief:" 50年前由长沙土夫子（盗墓贼）出土的战国帛书，记载了一个奇特战国古墓的位置，50年后，其中一个土夫子的孙子在他的笔记中发现这个秘密，纠集了一批经验丰富的盗墓贼前去寻宝，谁也没有想到，这个古墓竟然有着这么多诡异的事情：七星疑棺，青眼狐尸，九头蛇柏。这神秘的墓主人到底是谁，他们到底能不能找到真正的棺椁？故事悬念重重，情节跌荡，值得一看。盗墓笔记1-8部TXT全集内容。"
    }
  }
}
</script>

<style scoped>

.novel-wapper{
  font-size: 10px;
  height: 96px;
  width: 320px;
  background-color: white;
}

.novel-wapper>div{

  display: inline-block;
  position: relative;
}
.name-wapper{
  width: 238px;
  margin-left: 10px;
  /*background-color: #E5041E;*/
}



.cover{
  height: 96px;
  width: 72px;
}


.name:hover,
.brief:hover{
  color: #E5041E;
}

.name{
  font-size: 20px;
  color: #222222;
  position: absolute;
  bottom: 68px;
}

.brief{
  font-size: 13px;
  color: #666666;
  /*text-overflow: ellipsis;*/
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*line-clamp: 2;*/
  -webkit-box-orient: vertical;
  position: absolute;
  bottom: 30px;
}



.author{
  font-size: 15px;
  position: absolute;
  bottom: -1px;

}
</style>