import Vue from "vue";
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";

// use ElementUI
Vue.use(ElementUI)

// if production mode then give  tips (pTip === true)
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
