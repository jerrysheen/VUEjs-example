import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Main from "@/views/main"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Main
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
