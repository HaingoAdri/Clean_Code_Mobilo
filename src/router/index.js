import { createRouter, createWebHistory } from "vue-router";
import LoginConnexion from '../views/Login.vue';
import InscriptionRegister from '../views/Inscription.vue';
import DashBoard from '../views/DashBoard.vue';
import ConfigurationMeta from '../views/configuration/ConfigurationMeta.vue';
import ConfigurationMotsCles from '../views/configuration/ConfigurationMotsCles.vue';
import ConfigurationFooter from '../views/configuration/ConfigurationFooter.vue';
import ConfigurationLangue from '../views/configuration/ConfigurationLangue.vue';
import Information_managment from '../views/information/Redaction_information.vue';
import Resultats_managment from '../views/information/Resutlat.vue';
import Endpoints_introduction from '../views/endpoints/Introduction_vue.vue';
import Endpoints_Categorie from '../views/endpoints/Endpoints_categorie.vue';
import Sous_Categorie from '../views/endpoints/Sous_categorie.vue';
import Header_vue from '../views/endpoints/Header_vue.vue';
import Body_vue from '../views/endpoints/Body_vue.vue';

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
    },{
        path: '/footerConfiguration',
        name:'footerConfiguration',
        component: ConfigurationFooter,
        meta: { title: 'Configuration du footer'}
    },{
        path: '/langueConfiguration',
        name:'langueConfiguration',
        component: ConfigurationLangue,
        meta: { title: 'Configuration de langue' }
    },
    {
        path: '/information_managment',
        name:'informationManagment',
        component: Information_managment,
        meta: { title: 'Information editeur'}
    },
    {
        path: '/resultat_information',
        name: 'Resultats_managment',
        component: Resultats_managment,
        meta: { title: 'Resultat des informations'}
    },
    {
        path: '/endpoints_introduction',
        name: 'Endpoints_introduction',
        component: Endpoints_introduction,
        meta: { title: 'Introduction endpoints'}
    },
    {
        path: '/endpoints_Categorie',
        name: 'Endpoints_Categorie',
        component: Endpoints_Categorie,
        meta: { title: 'Categorie endpoints'}
    },
    {
        path: '/Sous_Categorie',
        name: 'Sous_Categorie',
        component: Sous_Categorie,
        meta: { title: 'Sous categorie endpoints'}
    },
    {
        path: '/Header_vue',
        name: 'Header_vue',
        component: Header_vue,
        meta: { title: 'Query endpoints'}
    },
    {
        path: '/Body_vue',
        name: 'Body_vue',
        component: Body_vue,
        meta: { title: 'Body endpoints'}
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
