import { createRouter, createWebHistory } from "vue-router";
import LoginConnexion from '../views/Login.vue';
import InscriptionRegister from '../views/Inscription.vue';
import DashBoard from '../views/DashBoard.vue';
import ConfigurationMeta from '../views/configuration/ConfigurationMeta.vue';
import ConfigurationMotsCles from '../views/configuration/ConfigurationMotsCles.vue';

const routes = [
    {
        path: '/',
        name: 'LoginConnexion',
        component: LoginConnexion,
        meta: { title: 'Connexion' }
    },
    {
        path: '/s-inscrire',
        name:'InscriptionRegister',
        component: InscriptionRegister,
        meta: { title: 'Inscription' }
    },
    {
        path:'/dashboard',
        name:'DashBoard',
        component: DashBoard,
        meta: { title: 'DashBoard' }
    },
    {
        path:'/metaConfiguration',
        name:'metaConfiguration',
        component:ConfigurationMeta,
        meta: { title: 'Configuration description meta' }
    },{
        path:'/metaMotsCles',
        name:'Mots_cles',
        component: ConfigurationMotsCles,
        meta: { title: 'Configuration mots cles'}
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const defaultTitle = 'Mobilosoft api configuration';
    document.title = to.meta.title || defaultTitle;
    next();
  });

export default router;
