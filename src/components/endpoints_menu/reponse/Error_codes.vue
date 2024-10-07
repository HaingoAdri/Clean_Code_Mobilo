<template>
    <div>
        <!-- Card displaying the error codes list -->
        <div class="card mb-4">
            <div class="card-header rounded-bottom rounded-4">
                <h3 class="py-2">Liste des Codes d'Erreur</h3>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sous-catégorie</th>
                                <th>Code</th>
                                <th>Détails</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="code in codes" :key="code[0]">
                                <td>{{ code[3] }}</td>
                                <td>{{ code[1] }}</td>
                                <td>{{ code[2] }}</td>
                                <td>
                                    <button class="btn m-2" @click="openUpdateModal(code)">
                                        <i class="bi bi-pen-fill"></i>
                                    </button>
                                    <button class="btn" @click="handleDelete(code[0])">
                                        <i class="bi bi-file-earmark-x-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </blockquote>
            </div>
        </div>

        <!-- Modal for updating error code data -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Mise à jour du Code d'Erreur</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleUpdate">
                            <div class="mb-3">
                                <label class="form-label">Code :</label>
                                <input type="text" class="form-control" v-model="updatedCode.code" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Détails :</label>
                                <textarea class="form-control" v-model="updatedCode.details" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Sous-catégorie :</label>
                                <select class="form-control" v-model="updatedCode.sous_categorie" required>
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
    name: 'CodeResponse_vue',
    data() {
        return {
            codes: [],  // Holds the list of error codes
            updatedCode: {},  // Holds the code data for updating
            updateModalInstance: null,
            information: [],  // Holds the list of sous-catégories
        };
    },
    mounted() {
        this.fetchCodes();
        this.fetchSousCategories();
    },
    methods: {
        async fetchCodes() {
            try {
                const response = await fetchData('/codes/allCodes_view'); // Assuming you have this endpoint set up
                if (response) {
                    this.codes = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des codes:', error);
            }
        },

        openUpdateModal(code) {
            this.updatedCode = {
                id: code[0],
                code: code[1],
                details: code[2],
                sous_categorie: code[3]
            };
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },

        async handleUpdate() {
            try {
                const response = await putData(`/codes/update_code/${this.updatedCode.id}`, this.updatedCode);
                if (response) {
                    alert('Code d\'Erreur mis à jour avec succès !');
                    this.fetchCodes();
                    this.updateModalInstance.hide();
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour:', error);
            }
        },

        async handleDelete(id) {
            if (confirm('Voulez-vous vraiment supprimer ce code d\'erreur ?')) {
                try {
                    await deleteData(`/codes/delete_code/${id}`);
                    alert('Code d\'Erreur supprimé avec succès !');
                    this.fetchCodes();
                } catch (error) {
                    console.error('Erreur lors de la suppression:', error);
                }
            }
        },

        async fetchSousCategories() {
            try {
                const response = await fetchData('/sous_categorie/allSous_categorie');
                if (response) {
                    this.information = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des sous-catégories:', error);
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
