<template>
    <div>
      <app-header></app-header>
      <app-navbar></app-navbar>
      <app-main></app-main>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppNavbar from '@/components/AppNavbar'
import AppMain from '@/components/AppMain'

export default {
  components:{ AppHeader, AppNavbar, AppMain}
};
</script>

<style scoped>
.header{
  position: absolute;
  line-height: 50px;
  width: 100%;
  background-color: cadetblue;
}

.sidebar{
  position: absolute;
  margin-top: 50px;
  width: 15%;
  height: 100%;
  background-color:darkgray;
}

.main{
  position: absolute;
  margin-top: 50px;
  margin-left: 15%;
  width:100%;
  height: 100%;
  background-color:dimgrey;
}


</style>