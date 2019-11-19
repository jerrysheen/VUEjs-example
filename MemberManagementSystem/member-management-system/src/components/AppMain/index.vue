<template>
  <!-- <el-main>
    <slot></slot>
  </el-main> -->
  <div class="main">
      <el-breadcrumb v-show="$route.path !== '/main/'">
        <el-breadcrumb-item  :to="{ path: $route.path }">{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view>
      </router-view>
  </div>
</template>

<style scoped>
.el-breadcrumb{
  height:10px;
  padding: 20px;
  border-radius: 4px;
  margin: 5px 10px 5px 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
.el-breadcrumb__item{
  border-left: 3px solid #31c17b;
  padding-left: 10px;
}
</style>
