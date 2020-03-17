import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue")
  },
  {
    path: "/posts/:userId",
    name: "Posts",
    component: () =>
      import(/* webpackChunkName: "Posts" */ "../views/Posts.vue")
  },
  {
    path: "/comments/:postId",
    name: "Comments",
    component: () =>
      import(/* webpackChunkName: "Comments" */ "../views/Comments.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
