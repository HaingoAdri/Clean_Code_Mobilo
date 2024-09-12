<template>
    <div class="card">
        <div class="card-header rounded-bottom rounded-4 d-flex justify-content-between">
            <h3 class="py-2">Mots clés actuelle</h3>
            <div class="a">
                <!-- Bouton de mise à jour qui déclenche le modal -->
                <button class="btn m-2" @click="showUpdateModal"><i class="bi bi-pen-fill"></i></button>
                <!-- Bouton de suppression -->
                <button class="btn" @click="deleteMetaDescription"><i class="bi bi-file-earmark-x-fill"></i></button>
            </div>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p v-if="metaData">{{ metaData.description }}</p>
                <p v-else>Aucune description disponible pour ce type.</p>
            </blockquote>
        </div>

        <!-- Modal de mise à jour -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Modifier la méta description</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateMetaDescription">
                            <div class="mb-3">
                                <label for="metaDescription" class="form-label">Méta description</label>
                                <textarea v-model="updatedDescription" class="form-control" id="metaDescription" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchData, putData, deleteData } from '@/service/apiService'; // Import des fonctions PUT et DELETE
import * as bootstrap from 'bootstrap';

export default {
    name: 'Mots_cles',
    props: {
        types: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            metaData: null,
            updatedDescription: '',
            type: 'mots cles',
        };
    },
    mounted() {
        this.fetchMetaDescription();
    },
    methods: {
        async fetchMetaDescription() {
            try {
                const response = await fetchData(`/configuration/search?name=${encodeURIComponent(this.types)}`);
                if (response) {
                    this.metaData = response;
                    this.updatedDescription = this.metaData.description; // Préremplir le modal avec la méta description actuelle
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        },
        showUpdateModal() {
            const updateModal = new bootstrap.Modal(document.getElementById('updateModal')); // Initialiser le modal
            updateModal.show();
        },
        async updateMetaDescription() {
            try {
                await putData(`/configuration/update_configuration/${encodeURIComponent(this.types)}`, {
                    types: this.types,
                    description: this.updatedDescription
                });
                window.alert('Mise à jour réussie');
                this.fetchMetaDescription(); // Rafraîchir les données après la mise à jour
                const updateModal = bootstrap.Modal.getInstance(document.getElementById('updateModal'));
                updateModal.hide(); // Fermer le modal après la mise à jour
            } catch (error) {
                console.error('Erreur lors de la mise à jour:', error);
                window.alert('Échec de la mise à jour');
            }
        },
        async deleteMetaDescription() {
            try {
                await deleteData(`/configuration/delete_configuration/${encodeURIComponent(this.types)}`);
                window.alert('Suppression réussie');
                this.metaData = null; // Réinitialiser les données après la suppression
            } catch (error) {
                console.error('Erreur lors de la suppression:', error);
                window.alert('Échec de la suppression');
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
