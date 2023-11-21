// Importa le funzioni createWebHashHistory e createRouter da vue-router
import { createWebHashHistory, createRouter } from 'vue-router'

// Importa i componenti delle viste
import HomeView from './views/HomeView.vue'
import SingleProjectView from './views/SingleProjectView.vue'

// 1. Definisci i componenti delle rotte.

//createApp(App).mount('#app')

// 2. Definisci alcune rotte

//const HomeView = '';

const routes = [
    {
        // Rotta per la homepage
        path: '/', 
        component: HomeView
    },
    {
        // Rotta per visualizzare un singolo progetto con un parametro dinamico :slug
        path: '/project/:slug', 
        name: 'project', // Nome della rotta
        component: SingleProjectView
    }
]

// 3. Crea un'istanza del router

const router = createRouter({

    // 4. Fornisci l'implementazione della history da utilizzare. Qui usiamo hash history per semplicità.
    history: createWebHashHistory(),
    routes // Passa l'array di definizioni di rotte al router

})

// Esporta l'istanza del router di Vue
export { router }
