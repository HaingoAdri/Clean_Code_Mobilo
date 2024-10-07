<template>
    <div>
        <div class="card mb-4">
            <div class="card-header rounded-bottom rounded-4">
                <h3 class="py-2">Liste des Headers</h3>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Types</th>
                                <th>Détails</th>
                                <th>Sous-catégorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="header in headers" :key="header[0]">
                                <td>{{ header[1] }}</td>
                                <td>{{ header[2]}}</td>
                                <td>{{ header[3] }}</td>
                                <td>{{ header[4]}}</td>
                                <td>
                                    <button class="btn m-2" @click="openUpdateModal(header)"><i class="bi bi-pen-fill"></i></button>
                                    <button class="btn" @click="handleDelete(header[0])"><i class="bi bi-file-earmark-x-fill"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </blockquote>
            </div>
        </div>

        <!-- Modal pour mettre à jour les données -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Mise à jour du Header</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleUpdate">
                            <div class="mb-3">
                                <label class="form-label">Nom :</label>
                                <input type="text" class="form-control" v-model="updatedHeader.nom" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Types :</label>
                                <input type="text" class="form-control" v-model="updatedHeader.types" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Détails :</label>
                                <textarea class="form-control" v-model="updatedHeader.details" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Sous-catégorie :</label>
                                <select class="form-control" v-model="updatedHeader.sous_categorie" required>
                                    <option v-for="item in information" :key="item.id" :value="item.id">{{ item.nom }}</option>
                                </select>
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
    name: 'Header_vue',
    data() {
        return {
            headers: [],
            updatedHeader: {},
            updateModalInstance: null,
            information: [],
        };
    },
    mounted() {
        this.fetchHeaders();
        this.fetchSearchInformation();
    },
    methods: {
        async fetchHeaders() {
            try {
                const response = await fetchData(`/header/allHeader_view`); // Assurez-vous que votre API a cette route
                if (response) {
                    this.headers = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des headers:', error);
            }
        },

        openUpdateModal(header) {
            this.updatedHeader = { 
                id: header[0],
                nom: header[1],
                types: header[2],
                details: header[3],
                sous_categorie: header[4]
            };
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },

        async handleUpdate() {
            try {
                const response = await putData(`/header/update_header/${this.updatedHeader.id}`, this.updatedHeader);
                if (response) {
                    alert('Header mis à jour avec succès !');
                    this.fetchHeaders();
                    this.updateModalInstance.hide();
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour:', error);
            }
        },

        async handleDelete(id) {
            if (confirm('Voulez-vous vraiment supprimer ce header ?')) {
                try {
                    await deleteData(`/header/delete_header/${id}`);
                    alert('Header supprimé avec succès !');
                    this.fetchHeaders();
                } catch (error) {
                    console.error('Erreur lors de la suppression:', error);
                }
            }
        },
        
        async fetchSearchInformation() {
            try {
                const response = await fetchData(`/sous_categorie/allSous_categorie`);
                if (response) {
                    this.information = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        },
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
