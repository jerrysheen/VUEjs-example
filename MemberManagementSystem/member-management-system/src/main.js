import Vue from "vue";
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from './store'

// use ElementUI
Vue.use(ElementUI)

// import login permission file
import './permission'

// if production mode then give  tips (pTip === true)
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
