<template>

  <div class="register-wapper">

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
      <button>获取验证码</button>
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

}

input{
  margin: 20px 20px;
}

</style>