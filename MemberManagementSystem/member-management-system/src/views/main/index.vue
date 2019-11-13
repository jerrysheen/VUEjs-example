<template>
  <div>
     <mainframe>
        <h1>main content</h1>
    </mainframe>
  </div>
</template>

<script>
import mainframe from '@/components/mainFrame' 
export default {

   created() {
      if(localStorage.getItem('msm-accountObj') == null){
         this.$router.push('/login')
      }
   },
   data() {
    return {};
   },

   components: {mainframe},

   methods: {}
};
</script>

<style scoped>
</style>