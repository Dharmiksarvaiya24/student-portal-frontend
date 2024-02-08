import { createRouter, createWebHistory } from 'vue-router'; 
import Add from './components/add.vue'; 
import UserData from './components/userdata.vue'; 
import edit from './components/edit.vue';

const router = createRouter({
    history: createWebHistory('/'), 
    routes: [
        { path: '/', component: Add },
        { path: '/userdata', component: UserData },
        { path: '/edit/:userId', name: 'edit',component: edit},
    ]
});

export default router;
