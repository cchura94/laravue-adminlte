import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagina from "../views/Pagina.vue";
import Nosotros from "../views/Nosotros.vue";
import Servicio from "../views/Servicio.vue"
import Admin from "../views/admin/Admin.vue"
import Inicio from "../views/Inicio.vue";
import Login from "../views/Login.vue";
import Categoria from '../views/admin/categoria/Categoria.vue'


Vue.use(VueRouter)

const rutas = [
    {
        path: "/",
        name: "Pagina",
        component: Pagina,
        children: [
            {
                path: "/",
                name: "Inicio",
                component: Inicio
            },
            {
                path: "/acerca",
                name: "Nosotros",
                component: Nosotros
            }, 
            {
                path: '/servicios',
                name: "Serv",
                component: Servicio
            },
            {
                path: '/login',
                name: "Login",
                component: Login
            },
            
        ]
    },    
    {
        path: '/admin',
        name: "Admin",
        component: Admin,
        children: [
            {
                path: 'categoria',
                name: 'Categoria',
                component: Categoria
            }
        ]

    }
];

const router = new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: rutas
});

export default router;