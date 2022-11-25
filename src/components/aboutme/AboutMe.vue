<template>
  <div class="about-me-wapper">


    <div class="avatar-wapper">
      <img :src="avatarUrl" alt="ggg" class="avatar">
    </div>

    <div class="about-me">

      <router-link
          class="about-me-li"
          :to="menu.src"
          v-for="menu in menus"
          :key="menu.name"
          active-class="active">
        <button >{{menu.name}}</button>
      </router-link>



    </div>

  </div>
</template>

<script>
export default {
  name: "AboutMe",

  data(){
    return{
      isLogin: false,
      avatarUrl: "http://localhost:2520/public/img/avatar/shenshanshi.jpg",
      loginMenus:[
        {
          src:"/aboutme",
          name:"个人中心"
        },{
          src:"/aboutme",
          name:"投稿管理"
        },{
          src:"/aboutme",
          name:"消息中心"
        },{
          src:"logout",
          name:"退出登录"
        }

      ],
      logoutMenus:[
        {
          src:"/login",
          name:"登录"
        }
      ]
    }
  },
  computed:{

    menus(){
      if (this.isLogin){
        return this.loginMenus
      }else{
        return this.logoutMenus
      }
    }

  }
}
</script>

<style scoped>

.about-me-wapper{

  height: 100%;
  float: right;
  position: relative;
  /*background: #85898E;*/
}


.about-me-wapper:hover .about-me{
  display: block;
}

.about-me-wapper:hover .avatar{
  width: 50px;
  border-radius: 25px;
  /*margin-left: 35px;*/
}


.avatar-wapper{

  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  /*background-color: #E5041E;*/
}

.avatar{


  margin: 0px auto;
  width: 40px;
  border-radius: 20px;
}

.about-me{

  display: none;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  width: 150px;
  /*margin-top: 2px;*/
  /*padding-top: 10px;*/
  box-shadow: 2px 2px 10px #E5E5E5;
  padding: 20px 0px;
  left: -25px;

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

/*.about-me-li>button:after{*/
/*  content:"";*/
/*  display: inline-block;*/
/*  !*position: absolute;*!*/
/*  !*top:30px;*!*/
/*  !*left: auto;*!*/
/*  width: 100px;*/
/*  height: 1px;*/
/*  background-color: darkgray;*/

/*}*/


</style>