<template>
  <div class="about-me-wapper">

    <!--    头像    -->
    <div  class="avatar-wapper">

      <!--      已登录   -->
      <router-link v-if="token" to="/space">
        <img :src="account.avatar"  class="avatar" >
      </router-link>

      <!--      未登录   -->
      <!--      target="_blank"-->
      <router-link v-else to="/login" >
        <img src="@/assets/icon/login.svg"  class="avatar">
      </router-link>

    </div>


    <!--    已登录菜单栏-->
    <div class="about-me" v-if="token">

      <router-link class="about-me-li" to="/space" target="_blank">
        <button >个人中心</button>
      </router-link>
      <router-link class="about-me-li" to="/space" target="_blank">
        <button >投稿管理</button>
      </router-link>
      <router-link class="about-me-li" to="/space" target="_blank">
        <button >消息中心</button>
      </router-link>
      <div class="about-me-li" @click="logout">
        <button >退出登录</button>
      </div>


    </div>

  </div>
</template>

<script>
import {logout} from "@/api/oauth/oauth";
import {getAccount} from "@/api/account/account";


export default {
  name: "AboutMe",

  data(){
    return{
      token: localStorage.getItem("TOKEN"),
      account:{},
      avatarUrl: "http://121.36.210.108/static/shenshanshi/image/avatar/shenshanshi.jpg",
    }
  },
  methods:{

    // 退出登录
    async logout(){
      let result = await logout();
      localStorage.removeItem("TOKEN");
      this.token = localStorage.getItem("TOKEN");
      if (result.code !== 200){
        console.log("退出登录失败");
      }
    },

    async getAccount(){
      let result = await getAccount()
      if (result.code === 200){
        this.account = result.data
      }else{
        localStorage.removeItem("TOKEN")
        this.token = ""
      }
      // console.log(this.account);
    }




  },
  mounted() {
    this.getAccount()


  }

}
</script>

<style scoped>

.about-me-wapper{


  width: 50px;
  height: 50px;
  float: right;
  position: relative;
  /*background: #85898E;*/
  margin-top: 15px;

}

.about-me-wapper:hover .about-me{
  display: block;
}




.about-me-wapper:hover .avatar
{
  margin: 0 0 10px 0;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.avatar{



  /*display: table;*/
  height: 40px;
  width: 40px;
  border-radius: 20px;
  outline: #E8ECF1 2px solid;
  margin-top: 5px;
  margin-left: 5px;
  /*border: aliceblue 2px solid;*/
}


.about-me{

  display: none;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  width: 130px;

  box-shadow: 2px 2px 10px #E5E5E5;
  padding: 10px 0px;
  left: -40px;

}



.about-me-li>button:hover{
  background-color: #E3E5E7;
}



.about-me-li>button{

  width: 120px;
  height: 40px;
  border: none;
  font-size: 16px;
  background: transparent;
  color: #61666D;
  border-radius: 5px;
  position: relative;

}



</style>