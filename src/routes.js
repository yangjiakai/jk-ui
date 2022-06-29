import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ButtonPage from "./views/ButtonPage.vue";
import TablePage from "./views/TablePage.vue";
import GradientPage from "./views/GradientPage.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
  },
  {
    path: "/homePage",
    meta: { title: "home" },
    component: Home,
  },
  {
    path: "/buttonPage",
    meta: { title: "buttonPage" },
    component: ButtonPage,
  },
  {
    path: "/tablePage",
    meta: { title: "tablePage" },
    component: TablePage,
  },
  {
    path: "/gradientPage",
    meta: { title: "gradientPage" },
    component: GradientPage,
  },
  { path: "/:path(.*)", component: NotFound },
];
