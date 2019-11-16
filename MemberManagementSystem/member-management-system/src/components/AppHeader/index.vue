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
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleCommand(command) {
        this.$message('click on item ' + command);
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

</style>>