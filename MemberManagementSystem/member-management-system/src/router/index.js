import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Layout from "@/components/mainFrame"
import Member from "@/views/member"
import Main from "@/views/main"
import Supply from "@/views/supply"
import Goods from "@/views/goods"
import Stuff from "@/views/stuff"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "layout",
    redirect: '/main',
    component: Layout,
    children: [
      {
        path: '/main',
        component: Main,
        meta: { title: '主页' }
      },

      {
        path: "/supply",
        component: Supply,
        meta: { title: '供应商管理' }
      },
      {
        path: "/goods",
        component: Goods,
        meta: { title: '商品管理' }
      },
      {
        path: "/stuff",
        component: Stuff,
        meta: { title: '员工管理' }
      },
      {
        path: "/member",
        component: Member,
        meta: { title: '会员管理' }
      }
    ]
  },
  // {
  //   path: "/member",
  //   name: "member",
  //   component: Member
  // },
  // {
  //   path: "/supply",
  //   name: "supply",
  //   component: Supply
  // },
  // {
  //   path: "/goods",
  //   name: "goods",
  //   component: Goods
  // },
  // {
  //   path: "/stuff",
  //   name: "stuff",
  //   component: Stuff
  // },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
