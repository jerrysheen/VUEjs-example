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
  //    created() {
  //     if(localStorage.getItem('msm-accountObj') == null){
  //        this.$router.push('/login')
  //     }
  //  },
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
  top: 50px;
  width: 15%;
  bottom: 0px;  
  background-color:white;
}

.main{
  position: absolute;
  margin-top: 50px;
  margin-left: 15%;
  width:85%;
  height: 100%;
  background-color:white;
}


</style>