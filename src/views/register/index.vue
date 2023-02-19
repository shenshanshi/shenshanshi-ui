<template>

  <div class="register-wapper">

    <div class="register-model">

      <p class="register-name">注册</p>
      <p class="error"></p>
      <div class="accountName">
        <input placeholder="请输入邮箱" v-model="email"/>
        <!--      <p class="error">{{emailError}}</p>-->
      </div>

      <div class="accountName">
        <input placeholder="请输入用户名" v-model="accountName"/>
      </div>

      <div class="accountName">
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </div>

      <div class="accountName">
        <input placeholder="请输入验证码" v-model="validateCode"/>
        <button class="get-code">获取验证码</button>
      </div>

      <button class="register">注册</button>

    </div>





  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data(){
    return{

      email:'',
      accountName:'',
      password:'',
      validateCode:''
    }
  },

  computed:{
    // emailError(){
    //   if (this.email === ''){
    //     return "邮箱不能为空!";
    //   }
    // }

  }
}
</script>

<style scoped>

.register-wapper{
  width: 100%;
  /*height: 1000px;*/
  height: auto;
  position: absolute;
  bottom: 0;
  top: 0;

  /*background-image: url("../../assets/background/loginbackground.jpg");*/
  /*background-repeat: no-repeat;*/
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-color: white;
  /*z-index: 1;*/
}

.register-model{
  display: inline-block;
  margin-left: 55%;
  margin-top: 200px;
  width: 600px;
  height: 400px;
  background-color: rgba(222,222,222,0.3);
}
.register-name{


  text-align: center;
  margin-top: 20px;
  font-size: 40px;
  color: #666666;
}
.error{

  height: 20px;
  text-align: center;
  /*margin-top: 20px;*/
  font-size: 15px;
  color: red;
}
input{
  width: 250px;
  /*line-height: 30px;*/
  font-size: 18px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 2px 5px;
  margin: 15px 0 15px 175px;

}

.get-code{
  /*border: none;*/
  /*outline: #b3d4fc 1px solid;*/
  /*border-radius: 2px;*/
  margin-left: 10px;
}


.register{
  border: none;
  background-color: #b3d4fc;
  width: 100px;
  height: 40px;
  font-size: 25px;
  line-height: 40px;
  border-radius: 5px;
  margin-left: 250px;
  margin-top: 20px;
}


</style>