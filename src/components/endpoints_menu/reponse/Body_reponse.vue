<template>
    <div>
        <!-- Card displaying the body response list -->
        <div class="card mb-4">
            <div class="card-header rounded-bottom rounded-4">
                <h3 class="py-2">Corps des sous-catégorie liste (Body)</h3>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sous-catégorie</th>
                                <th>Nom</th>
                                <th>Types</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="body in bodies" :key="body[0]">
                                <td>{{ body[4] }}</td>
                                <td>{{ body[1] }}</td>
                                <td>{{ body[2] }}</td>
                                <td>{{ body[3] }}</td>
                                <td>
                                    <button class="btn m-2" @click="openUpdateModal(body)">
                                        <i class="bi bi-pen-fill"></i>
                                    </button>
                                    <button class="btn" @click="handleDelete(body[0])">
                                        <i class="bi bi-file-earmark-x-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </blockquote>
            </div>
        </div>

        <!-- Modal for updating body data -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Mise à jour du Body</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleUpdate">
                            <div class="mb-3">
                                <label class="form-label">Nom :</label>
                                <input type="text" class="form-control" v-model="updatedBody.nom" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Types :</label>
                                <input type="text" class="form-control" v-model="updatedBody.types" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description :</label>
                                <textarea class="form-control" v-model="updatedBody.details" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Sous-catégorie :</label>
                                <select class="form-control" v-model="updatedBody.sous_categorie" required>
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
    name: 'BodyResponse_vue',
    data() {
        return {
            bodies: [],
            updatedBody: {},
            updateModalInstance: null,
            information: [],
        };
    },
    mounted() {
        this.fetchBodies();
        this.fetchSearchInformation();
    },
    methods: {
        async fetchBodies() {
            try {
                const response = await fetchData(`/body/allBody_view`);
                if (response) {
                    this.bodies = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des bodies:', error);
            }
        },

        openUpdateModal(body) {
            this.updatedBody = {
                id: body[0],
                nom: body[1],
                types: body[2],
                details: body[3],
                sous_categorie: body[4]
            };
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },

        async handleUpdate() {
            try {
                const response = await putData(`/body/update_body/${this.updatedBody.id}`, this.updatedBody);
                if (response) {
                    alert('Body mis à jour avec succès !');
                    this.fetchBodies();
                    this.updateModalInstance.hide();
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour:', error);
            }
        },

        async handleDelete(id) {
            if (confirm('Voulez-vous vraiment supprimer ce body ?')) {
                try {
                    await deleteData(`/body/delete_body/${id}`);
                    alert('Body supprimé avec succès !');
                    this.fetchBodies();
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
