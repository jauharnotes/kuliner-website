import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './components/TheHome.vue';
import SignUp from './components/SignUp.vue';
import LoginView from './components/LoginView.vue';

const routes = [
  {
    home: 'TheHome',
    component: TheHome,
    path: '/',
  },
  {
    home: 'SignUp',
    component: SignUp,
    path: '/sign-up',
  },
  {
    home: 'loginView',
    component: LoginView,
    path: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
