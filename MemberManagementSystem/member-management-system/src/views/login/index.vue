<template>
  <div class="login-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-form">
      <h2>member manage system</h2>
      <el-form-item label="account" prop="account">
        <el-input v-model="form.account" ></el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    </el-form>
  </div>
</template>
<style scoped>
.login-form {
  width: 20%;
  margin: 10% auto;
  background-color: rgb(230, 230, 250, 0.7);
  padding: 10px 30px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url("../../assets/loginBG.jpg");
}
</style>>

<script>
import {login, getUserInfo} from '@/api/login'

export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      },
      rules: {
        account: [
           { required: true, message: "please enter your account", trigger: 'blur'  }
         ],
        password: [
           { required: true, message: "please enter your password", trigger: 'blur'  }
        ]    
      }
    };
  },
  methods: {
    submitForm(formName) {
        console.log(this.$refs[formName])
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // send http request to server
              const loginPromise = this.$store.dispatch('loginPage',this.form)
              loginPromise
                .then(resp=>{
                  console.log(resp)
                  this.$router.push('/')
              })
              console.log(";;;;;",this.$store.state.login)
              // login(this.form.account,this.form.password).then(response =>{
              //     const resp = response
              //     console.log(resp)
              //     if(resp.data.flag){
              //       getUserInfo("test").then(response=>{
              //         console.log(response.data.data)
              //         localStorage.setItem('msm-accountObj', JSON.stringify(this.form))
              //         localStorage.setItem('msm-token', resp.data.value.data)
              //         //console.log(this.$store)
              //         this.$store.dispatch('loginPage',this.form)
              //         this.$router.push('/')
              //       })
              //     }else{
              //         this.$message.error(resp.data.message);
              //     }
              //})
            } else {
              console.log('error submit!!');
            }
          });
        },
  }
};
</script>

<style scoped>
</style>