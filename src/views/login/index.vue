<template>
  <div class="login-wapper">



    <div class="login-model">

      <p>登录</p>
      <p class="error">{{error}}</p>
      <div class="accountName">
        <input placeholder="请输入用户名|邮箱" v-model="accountName"/>
      </div>
      <div class="password">
        <input type="password" placeholder="密码" v-model="password"/>
      </div>

      <button @click="accountLogin">登录</button>

      <div>
        <span><router-link to="###">忘记密码</router-link></span>
        <span><router-link to="/register">注册</router-link></span>
      </div>
    </div>

  </div>

</template>



<script>






export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",


  data(){
    return{
      accountName:'',
      password:'',
      error: ''
    }
  },
  methods:{
    async accountLogin(){



      // this.$store.dispatch("accountLogin", this.accountName, this.password)
       var promise = await this.$store.dispatch("accountLogin", {accountName: this.accountName, password: this.password});

      if (promise === "ok"){
         this.$router.push("/home")
       }
      else{
        this.error = promise;
      }




    }
  }


}
</script>

<style scoped>




.login-wapper{
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

.login-model{
  display: inline-block;
  margin-left: 55%;
  margin-top: 200px;
  width: 600px;
  height: 400px;
  background-color: rgba(222,222,222,0.3);

}







p{

  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
  color: #666666;

}

.error{

  width: 100%;
  height: 20px;
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  color: red;
}

input{

  width: 250px;
  line-height: 30px;
  font-size: 20px;
  border-radius: 5px;
  border: 0px;
  padding: 2px 5px;
  margin: 20px auto;
  margin-left: 175px;
}

button{
  border: none;
  background-color: #E5041E;
  width: 100px;
  height: 40px;
  font-size: 25px;
  line-height: 40px;
  border-radius: 5px;
  margin-left: 250px;
  margin-top: 20px;

}


</style>