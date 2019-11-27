<template>
  <div class="header">
    <a href="#/" style="text-decoration: none;">
      <img class="logo" src="@/image/logo.png"></img>
      <span class="title">mms-system</span>
    </a>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-edit" command="changepassword">修改密码</el-dropdown-item>
            <el-dropdown-item icon="el-icon-close" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <change-password ref="changepassword" ></change-password>
  </div>
</template>
<script>
import changePassword from './ChangePassword'
import {logout} from '@/api/login'
export default {
  components:{changePassword},
  data(){
    return{
      dialogVisible:false,
    }
  },
  methods: {
    handleCommand(command) {
        switch(command){
          case 'logout':
          //退出登陆
              logout(localStorage.getItem('msm-token'))
              .then(response=>{
                  if(response.data.flag === true){
                    localStorage.removeItem('msm-accountObj')
                    this.$router.push('/login')
                  }
              })
              break;
          case 'changepassword':
              this.$refs.changepassword.openDialog()
              break;
          default:
              break;
        }

      }
    }
}
</script>

<style scoped>
.logo{
  vertical-align: middle;
  margin: 0 10px 0 20px;
}
.title{
  vertical-align: middle;
  color: white; 
}
.el-dropdown{
  vertical-align: middle;
  margin-right:20px;
  float: right;
}
.el-dropdown-link{
  color:white;
}

</style>