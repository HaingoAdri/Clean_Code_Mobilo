<template>
    <div class="card">
        <div class="card-header rounded-bottom rounded-4 d-flex justify-content-between">
            <h3 class="py-2">Introduction de l'endpoint actuelle</h3>
            <div class="a">
                <!-- Bouton pour ouvrir le modal de mise à jour -->
                <button class="btn m-2" @click="openUpdateModal"><i class="bi bi-pen-fill"></i></button>
                <!-- Bouton pour la suppression -->
                <button class="btn" @click="handleDelete"><i class="bi bi-file-earmark-x-fill"></i></button>
            </div>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p v-if="metaData">{{ metaData.details }}</p>
                <p v-else>Aucune description disponible pour ce type.</p>
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
                            <div class="mb-3">
                                <label for="description" class="form-label">Description :</label>
                                <textarea v-model="updatedDescription" class="form-control" id="description" rows="3"></textarea>
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
    name: 'Introduction_reponse',
    props: {
        titre: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            metaData: null,
            updatedDescription: '',
            updateModalInstance: null,
        };
    },
    mounted() {
        this.fetchSearchInformation();
    },
    methods: {
        // Récupérer les données par titre (ou un autre critère)
        async fetchSearchInformation() {
            try {
                const response = await fetchData(`/information/search/${encodeURIComponent(this.titre)}`);
                if (response) {
                    this.metaData = response;
                    this.updatedDescription = this.metaData.details; // Préremplir le champ de mise à jour
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        },
        
        // Ouvrir le modal de mise à jour
        openUpdateModal() {
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },
        
        // Gestion de la mise à jour par ID
        async handleUpdate() {
            try {
                const updatedData = {
                    details: this.updatedDescription
                };
                // Utiliser l'ID pour la mise à jour
                await putData(`/information/update_inforamtion/${this.metaData.id}`, updatedData);
                alert('Description mise à jour avec succès !');
                this.metaData.details = this.updatedDescription; // Mettre à jour localement après la réussite de l'update
                this.updateModalInstance.hide(); // Fermer le modal après mise à jour
            } catch (error) {
                console.error('Erreur lors de la mise à jour des données:', error);
            }
        },
        
        // Gestion de la suppression par ID
        async handleDelete() {
            if (confirm('Voulez-vous vraiment supprimer cette information ?')) {
                try {
                    // Utiliser l'ID pour la suppression
                    await deleteData(`/information/delete_information/${this.metaData.id}`);
                    alert('Données supprimées avec succès !');
                    this.metaData = null; // Réinitialiser les données après suppression
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
