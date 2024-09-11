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
        name: 'InscriptionRegister',
        component: InscriptionRegister,
        meta: { title: 'Inscription' }
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard,
        meta: { title: 'DashBoard', requiresAuth: true }
    },
    {
        path: '/metaConfiguration',
        name: 'metaConfiguration',
        component: ConfigurationMeta,
        meta: { title: 'Configuration description meta', requiresAuth: true }
    },
    {
        path: '/metaMotsCles',
        name: 'Mots_cles',
        component: ConfigurationMotsCles,
        meta: { title: 'Configuration mots cles', requiresAuth: true }
    },
    {
        path: '/footerConfiguration',
        name: 'footerConfiguration',
        component: ConfigurationFooter,
        meta: { title: 'Configuration du footer', requiresAuth: true }
    },
    {
        path: '/langueConfiguration',
        name: 'langueConfiguration',
        component: ConfigurationLangue,
        meta: { title: 'Configuration de langue', requiresAuth: true }
    },
    {
        path: '/information_managment',
        name: 'informationManagment',
        component: Information_managment,
        meta: { title: 'Information editeur', requiresAuth: true }
    },
    {
        path: '/resultat_information',
        name: 'Resultats_managment',
        component: Resultats_managment,
        meta: { title: 'Resultat des informations', requiresAuth: true }
    },
    {
        path: '/endpoints_introduction',
        name: 'Endpoints_introduction',
        component: Endpoints_introduction,
        meta: { title: 'Introduction endpoints', requiresAuth: true }
    },
    {
        path: '/endpoints_Categorie',
        name: 'Endpoints_Categorie',
        component: Endpoints_Categorie,
        meta: { title: 'Categorie endpoints', requiresAuth: true }
    },
    {
        path: '/Sous_Categorie',
        name: 'Sous_Categorie',
        component: Sous_Categorie,
        meta: { title: 'Sous categorie endpoints', requiresAuth: true }
    },
    {
        path: '/Header_vue',
        name: 'Header_vue',
        component: Header_vue,
        meta: { title: 'Query endpoints', requiresAuth: true }
    },
    {
        path: '/Body_vue',
        name: 'Body_vue',
        component: Body_vue,
        meta: { title: 'Body endpoints', requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const defaultTitle = 'Mobilosoft API Configuration';
    document.title = to.meta.title || defaultTitle;

    const isAuthenticated = !!localStorage.getItem('user'); // Vérifie si l'utilisateur est connecté
    if (to.meta.requiresAuth && !isAuthenticated) {
        // Si la route nécessite une authentification et l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
        next('/');
    } else {
        next();
    }
});

export default router;
