<template>
    <div class="card">
        <div class="card-header rounded-bottom rounded-4">
            <h3 class="py-2">Sous-catégories Liste</h3>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Categorie</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Url</th>
                            <th>Methode</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="sous_categorie in data" :key="sous_categorie[0]">
                            <td>{{ sous_categorie[5] }}</td>
                            <td>{{ sous_categorie[1] }}</td>
                            <td>{{ sous_categorie[2] }}</td>
                            <td>{{ sous_categorie[3] }}</td>
                            <td>{{ sous_categorie[4] }}</td>
                            <td>
                                <button class="btn m-2" @click="openUpdateModal(sous_categorie)"><i class="bi bi-pen-fill"></i></button>
                                <button class="btn" @click="handleDelete(sous_categorie[0])"><i class="bi bi-file-earmark-x-fill"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </blockquote>
        </div>
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Mise à jour de la sous-catégorie</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleUpdate">
                            <div class="mb-3">
                                <label class="form-label">Categorie :</label>
                                <select class="form-control" v-model="updatedSousCategorie.categorie">
                                    <option v-for="item in information" :key="item.id" :value="item.id">{{ item.nom }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nom :</label>
                                <input type="text" class="form-control" v-model="updatedSousCategorie.nom" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description :</label>
                                <textarea class="form-control" v-model="updatedSousCategorie.details"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Url :</label>
                                <input type="text" class="form-control" v-model="updatedSousCategorie.url" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Methode :</label>
                                <input type="text" class="form-control" v-model="updatedSousCategorie.methode" />
                            </div>
                            <button type="submit" class="btn btn-primary">Mettre à jour</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchData, putData, deleteData } from '@/service/apiService';
import * as bootstrap from 'bootstrap';

export default {
    name: 'Sous_categorie_vue',
    data() {
        return {
            data: null,
            updatedSousCategorie: {},
            information: [],
            updateModalInstance: null,
        };
    },
    mounted() {
        this.fetchInformation();
        this.fetchCategories();
    },
    methods: {
        async fetchInformation() {
            try {
                const response = await fetchData(`/sous_categorie/allSous_categorie_view`);
                if (response) {
                    this.data = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des sous-catégories:', error);
            }
        },

        async fetchCategories() {
            try {
                const response = await fetchData(`/endpoints/allCategorie`);
                if (response) {
                    this.information = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories:', error);
            }
        },

        openUpdateModal(sous_categorie) {
            this.updatedSousCategorie = { 
                id: sous_categorie[0],
                categorie: sous_categorie[5],
                nom: sous_categorie[1],
                details: sous_categorie[2],
                url: sous_categorie[3],
                methode: sous_categorie[4]
            };
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },

        async handleUpdate() {
            try {
                const response = await putData(`/sous_categorie/update_Sous_categorie/${this.updatedSousCategorie.id}`, this.updatedSousCategorie);
                if (response) {
                    alert('Sous-catégorie mise à jour avec succès !');
                    this.fetchInformation();
                    this.updateModalInstance.hide();
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour:', error);
            }
        },

        async handleDelete(id) {
            if (confirm('Voulez-vous vraiment supprimer cette sous-catégorie ?')) {
                try {
                    await deleteData(`/sous_categorie/delete_Sous_categorie/${id}`);
                    alert('Sous-catégorie supprimée avec succès !');
                    this.fetchInformation();
                } catch (error) {
                    console.error('Erreur lors de la suppression:', error);
                }
            }
        }
    }
}
</script>

<style scoped>
.card {
    border-radius: 15px;
}
.card-header {
    background-color: #022D7E;
    color: white;
}
button {
    background-color: #28aabb;
    color: white;
}
</style>
