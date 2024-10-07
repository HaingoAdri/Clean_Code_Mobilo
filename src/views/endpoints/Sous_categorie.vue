<template>
    <div class="custom-container">
        <br>
        <MenuVue/>
        <br>
        <div class="row">
            <div class="col-4">
                <Endpoints_menuVue/>
            </div>
            <div class="col-8">
                <div class="card overflow-auto" style="height: 350px;">
                    <div class="card-body">
                        <h3>Information sur les sous catégories d'enpoints ici</h3>
                        <hr>
                        <form class="row g-3" @submit.prevent="handleSubmit">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Categorie</th>
                                        <th>Nom</th>
                                        <th>Details</th>
                                        <th>Url</th>
                                        <th>Methode</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ligne, index) in lignes" :key="index">
                                        <td>
                                            <select class="form-control" v-model="ligne.categorie">
                                                <option v-for="item in information" :key="item.id" :value="item.id">{{item.nom}}</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="ligne.nom" placeholder="Exemple: Connexion user"/>
                                        </td>
                                        <td>
                                            <textarea type="text" class="form-control" v-model="ligne.details" placeholder="Exemple: FR"></textarea>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="ligne.url" placeholder="Exemple: /connexion/user"/>
                                        </td>
                                        <td>
                                            <select class="form-control" v-model="ligne.methode">
                                                <option value="POST">POST</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-danger btn-sm" @click="supprimerLigne(index)">Supprimer</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="d-flex justify-content-between">
                                <div class="">
                                    <button type="button" class="btn bt" @click="ajouterLigne">Ajouter une ligne</button>
                                </div>
                                <div class="">
                                    <button type="submit" class="btn bt">Enregistrer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <Sous_categorie_vue/>
    </div>
</template>

<script>
import MenuVue from '@/components/Menu.vue';
import Endpoints_menuVue from '@/components/endpoints_menu/Endpoints_menu.vue';
import Sous_categorie_vue from '../../components/endpoints_menu/reponse/Sous_categorie_reponse.vue';
import { fetchData, postData } from '@/service/apiService';
export default {
    name: 'Endpoints_categorie',
    components: {
        MenuVue,
        Endpoints_menuVue,
        Sous_categorie_vue
    },
    data() {
        return {
            lignes: [
                { categorie: '', nom: '', details: '', url: '', methode: '' }
            ],
            information: [],
        };
    },
    mounted() {
        this.fetchSearchInformation();
    },
    methods: {
        async fetchSearchInformation() {
            try {
                const response = await fetchData(`/endpoints/allCategorie`);
                if (response) {
                    this.information = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        },
        ajouterLigne() {
            this.lignes.push({ categorie: '', nom: '', details: '', url: '', methode: '' });
        },
        supprimerLigne(index) {
            this.lignes.splice(index, 1);
        },
        async handleSubmit() {
            try {
                for (const ligne of this.lignes) {
                    const data = {
                        categorie: ligne.categorie,
                        nom: ligne.nom,
                        details: ligne.details,
                        url: ligne.url,
                        methode: ligne.methode
                    };

                    await postData('/sous_categorie/save_Sous_categorie', data);
                }
                alert('Sous-catégories enregistrées avec succès');
                this.lignes = [
                    { categorie: '', nom: '', details: '', url: '', methode: '' }
                ];
            } catch (error) {
                console.error("Erreur lors de l'enregistrement des sous-catégories:", error);
            }
        }
    }
}
</script>

<style scoped>
.custom-container {
  max-width: 1600px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 576px) {
  .custom-container {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (min-width: 768px) {
  .custom-container {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 992px) {
  .custom-container {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1200px) {
  .custom-container {
    padding-left: 48px;
    padding-right: 48px;
  }
}

.card {
    border-radius: 15px;
}
.bt{
    border-radius: 10px;
    background-color: #022D7E;
    color: white;
}
</style>
