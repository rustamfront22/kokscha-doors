import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/Index.vue";
import Products from "../views/Products.vue";
import Product from "../views/Product.vue";

import About from "../views/About.vue";
import Partners from "../views/Partners.vue";
import Designers from "../views/Designers.vue";
import Builders from "../views/Builders.vue";

const routes = [
  { path: "/", component: Index, name: "index" },
  { path: "/products", component: Products, name: "products" },
  { path: "/products/:id", component: Product, name: "product" },
  { path: "/about", component: About, name: "about" },
  { path: "/partners", component: Partners, name: "partners" },
  { path: "/designers", component: Designers, name: "designers" },
  { path: "/builders", component: Builders, name: "builders" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0, behavior: "smooth" }),
});

export default router;