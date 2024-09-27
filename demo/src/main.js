import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'

import App from './App.vue'
import Navbar from './components/Navbar.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/A_Courier', component: A_Courier },

    ]
  })



const app = createApp(App)

app.use(router)
app.component('Navbar', Navbar);



app.mount('#app')
