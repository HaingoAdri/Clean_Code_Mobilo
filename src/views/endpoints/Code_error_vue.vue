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
                        <h3>Corps des erreurs ici</h3>
                        <hr>
                        <form class="row g-3" @submit.prevent="handleSubmit">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sous catégorie</th>
                                        <th>Code</th>
                                        <th>Détails</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ligne, index) in lignes" :key="index">
                                        <td>
                                            <select class="form-control" v-model="ligne.sousCategorie">
                                                <option v-for="item in information" :key="item.id" :value="item.id">{{item.nom}}</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="ligne.code" placeholder="Exemple: ERR001"/>
                                        </td>
                                        <td>
                                            <textarea type="text" class="form-control" v-model="ligne.details" placeholder="Exemple: Détails de l'erreur ici"></textarea>
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
        <Error_codes/>
    </div>
</template>

<script>
import MenuVue from '@/components/Menu.vue';
import Endpoints_menuVue from '@/components/endpoints_menu/Endpoints_menu.vue';
import Error_codes from '@/components/endpoints_menu/reponse/Error_codes.vue';
import { fetchData, postData } from '@/service/apiService';

export default {
    name: '_error',
    components: {
        MenuVue,
        Endpoints_menuVue,
        Error_codes
    },
    data() {
        return {
            lignes: [
                { sousCategorie: '', code: '', details: '' }
            ],
            information: [] // Holds sous catégorie data
        };
    },
    mounted() {
        this.fetchSousCategories();
    },
    methods: {
        ajouterLigne() {
            this.lignes.push({ sousCategorie: '', code: '', details: '' });
        },
        supprimerLigne(index) {
            this.lignes.splice(index, 1);
        },
        async fetchSousCategories() {
            try {
                const response = await fetchData('/sous_categorie/allSous_categorie');
                if (response) {
                    this.information = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des sous catégories:', error);
            }
        },
        async handleSubmit() {
            try {
                for (const ligne of this.lignes) {
                    const data = {
                        code: ligne.code,
                        details: ligne.details,
                        sous_categorie: ligne.sousCategorie
                    };

                    await postData('/codes/save_code', data);
                }
                alert('Codes d\'erreur enregistrés avec succès');
                this.lignes = [{ sousCategorie: '', code: '', details: '' }];
            } catch (error) {
                console.error("Erreur lors de l'enregistrement des codes d'erreur:", error);
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
.bt {
    border-radius: 10px;
    background-color: #022D7E;
    color: white;
}
</style>
