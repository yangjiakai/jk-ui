import Home from './views/Home.vue'
import About from './views/About.vue'
import ButtonPage from './views/ButtonPage.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/homePage',
    meta: { title: 'home' },
    component: Home,
  },
  {
    path: '/buttonPage',
    meta: { title: 'buttonPage' },
    component: ButtonPage,
  },
  { path: '/:path(.*)', component: NotFound },
]
