import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import Produk from "../views/Produk.vue";
import Edit from "../views/EditProduk.vue";
import Add from "../views/AddProduk.vue";
import Penjualan from "../views/Penjualan.vue";
import EditPenjualan from "../views/EditPenjualan.vue";
import AddPenjualan from "../views/AddPenjualan.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      {
        path: "/products",
        name: "products",
        components: { default: Produk },
      },
      {
        path: "/products/edit/:id",
        name: "Edit",
        components: { default: Edit },
      },
      {
        path: "/products/add",
        name: "Add",
        components: { default: Add },
      },
      {
        path: "/sale",
        name: "sale",
        components: { default: Penjualan },
      },
      {
        path: "/sale/edit/:id",
        name: "Edit-Penjualan",
        components: { default: EditPenjualan },
      },
      {
        path: "/sale/add",
        name: "Add-Penjualan",
        components: { default: AddPenjualan },
      },
      {
        path: "/icons",
        name: "icons",
        components: { default: Icons },
      },
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
      {
        path: "/tables",
        name: "tables",
        components: { default: Tables },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
