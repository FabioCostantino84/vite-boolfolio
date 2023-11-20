import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
//import dal fil router.js l'export {router}
import { router } from './router.js';
//importo il router con lo use()
createApp(App).use(router).mount('#app');
