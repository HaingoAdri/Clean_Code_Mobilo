<template>
    <div class="card">
        <div class="card-header rounded-bottom rounded-4">
            <h3 class="py-2">Endpoints categorie liste</h3>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <table class="table table-bordered">
                    <thead>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in metaData" :key="item.id">
                            <td>{{ item.nom }}</td>
                            <td>{{ item.details }}</td>
                            <td>
                                <!-- Bouton pour la mise à jour -->
                                <button class="btn m-2" @click="openUpdateModal(item)"><i class="bi bi-pen-fill"></i></button>
                                <!-- Bouton pour la suppression -->
                                <button class="btn" @click="handleDelete(item.id)"><i class="bi bi-file-earmark-x-fill"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </blockquote>
        </div>

        <!-- Modal pour la mise à jour de la description -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Mise à jour de la description</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleUpdate">

                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Categorie :</label>
                                <input type="text" class="form-control" v-model="categorie" id="inputAddress2" placeholder="Exemple: User authentification"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Description :</label>
                                <textarea type="text" class="form-control" v-model="description" id="inputAddress2" placeholder="Exemple: FR"></textarea>
                            </div>
                            <br>
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
    name: 'Endpoints_categorie_vue',
    data() {
        return {
            metaData: null,
            updatedDescription: '',
            selectedItem: null,
            updateModalInstance: null,
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
                    this.metaData = response;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        },
        
        openUpdateModal(item) {
            this.selectedItem = item;
            this.updatedDescription = item.details;
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },
        
        async handleUpdate() {
            if (!this.selectedItem) return;
            try {
                const data = {
                    nom: this.categorie,
                    details: this.description
                };
                await putData(`/endpoints/update_categorie/${this.selectedItem.id}`, data);
                alert('Description mise à jour avec succès !');
                
                this.selectedItem.details = this.updatedDescription;
                this.updateModalInstance.hide();
            } catch (error) {
                console.error('Erreur lors de la mise à jour des données:', error);
            }
        },
        
        async handleDelete(id) {
            if (confirm('Voulez-vous vraiment supprimer cette information ?')) {
                try {
                    await deleteData(`/endpoints/delete_categorie/${id}`);
                    alert('Données supprimées avec succès !');
                    
                    // Supprimer l'élément localement après la suppression
                    this.metaData = this.metaData.filter(item => item.id !== id);
                } catch (error) {
                    console.error('Erreur lors de la suppression des données:', error);
                }
            }
        }
    }
};
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
