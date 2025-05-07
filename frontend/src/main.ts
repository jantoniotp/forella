import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/main.css';
import router from './router';
import axios from 'axios';
import { createPinia } from 'pinia';
import { persistUserPlugin } from '@/plugins/persistUser';

axios.defaults.baseURL = 'http://localhost:8000/api';

const app = createApp(App);
const pinia = createPinia();
pinia.use(persistUserPlugin);
app.use(pinia);
app.use(router);
app.mount('#app');