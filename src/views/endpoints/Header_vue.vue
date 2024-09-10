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
                        <h3>Corps des sous catégories d'enpoints ici (Body)</h3>
                        <hr>
                        <form class="row g-3">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sous sategorie</th>
                                        <th>Nom</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ligne, index) in lignes" :key="index">
                                        <td>
                                            <select class="form-control" v-model="ligne.categorie">
                                                <option value="">Utilisateur authentification</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="ligne.nom" placeholder="Exemple: Connexion user"/>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="ligne.url" placeholder="Exemple: /connexion/user"/>
                                        </td>
                                        <td>
                                            <textarea type="text" class="form-control" v-model="ligne.description" placeholder="Exemple: FR"></textarea>
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
        <Header_vue/>
    </div>
</template>

<script>
import MenuVue from '@/components/Menu.vue';
import Endpoints_menuVue from '@/components/endpoints_menu/Endpoints_menu.vue';
import Header_vue from '../../components/endpoints_menu/reponse/Header_reponse.vue';

export default {
    name: 'Endpoints_categorie',
    components: {
        MenuVue,
        Endpoints_menuVue,
        Header_vue
    },
    data() {
        return {
            lignes: [
                { categorie: '', nom: '', url: '', description: ''}
            ]
        };
    },
    methods: {
        ajouterLigne() {
            this.lignes.push({ categorie: '', nom: '', url: '', description: ''});
        },
        supprimerLigne(index) {
            this.lignes.splice(index, 1);
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
