// import rotta, componente e cronologia
import { createWebHashHistory, createRouter } from 'vue-router';

// importiamo i componenti
import HomeView from './views/HomeView.vue';


//assegno ad una constante le ''
const Home = '';
const About = '';

//assegno ad una variabile routes il path con il componente associato
const routes = [

    // le rotte devono iniziare sempre con /
    { path: '/', component: HomeView},
    /* { path: '/about', component: About}, */
]

const router = createRouter( {
    //creazione cronologia del router
    history: createWebHashHistory(),
    routes
});

export {router};
