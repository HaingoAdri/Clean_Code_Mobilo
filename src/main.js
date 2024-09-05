import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

createApp(App).use(router).mount('#app')
