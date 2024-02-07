import { createRouter, createWebHistory } from 'vue-router'; 
import Add from './components/add.vue'; 
import UserData from './components/userdata.vue'; 

const router = createRouter({
    history: createWebHistory('/'), 
    routes: [
        { path: '/', component: Add },
        { path: '/userdata', component: UserData },
    ]
});

export default router;
