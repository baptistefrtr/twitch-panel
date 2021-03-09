import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Profile from "../views/user/Profile.vue";
import Login from "../views/user/Login.vue";
import Register from "../views/user/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
];

const router = new VueRouter({
  mode: "history",
routes
});

export default router;
