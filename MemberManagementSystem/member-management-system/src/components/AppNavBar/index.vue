<template>
<div class="sidebar">
    <el-menu
        :router="true"
        default-active="/main/"
      class="el-menu-vertical-demo"
      @select="handleSelect">
      <el-menu-item index="/main/" >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member/">
        <i class="el-icon-document"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supply/">
        <i class="el-icon-setting"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods/">
        <i class="el-icon-setting"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/stuff/">
        <i class="el-icon-setting"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</div>
</template>

<script>
export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>>

<style scoped>
.el-menu{
  height: 100%;
}
</style>