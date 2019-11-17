import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Main from "@/views/main"
import Member from "@/views/member"
import Supply from "@/views/supply"
import Goods from "@/views/goods"
import Stuff from "@/views/stuff"

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
  {
    path: "/member",
    name: "member",
    component: Member
  },
  {
    path: "/supply",
    name: "supply",
    component: Supply
  },
  {
    path: "/goods",
    name: "goods",
    component: Goods
  },
  {
    path: "/stuff",
    name: "stuff",
    component: Stuff
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
