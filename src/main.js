import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
// import "./plugins/booststrap-vue";

createApp(App).use(router).mount('#app');
