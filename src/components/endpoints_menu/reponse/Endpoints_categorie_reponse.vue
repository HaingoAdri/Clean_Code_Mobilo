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
                                <button class="btn m-2"><i class="bi bi-pen-fill"></i></button>
                                <button class="btn"><i class="bi bi-file-earmark-x-fill"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </blockquote>
        </div>
    </div>
</template>
<script>
import { fetchData, putData, deleteData } from '@/service/apiService'; // Import des fonctions PUT et DELETE
import * as bootstrap from 'bootstrap';
export default {
    name:'Endpoints_categorie_vue',
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
        async fetchSearchInformation() {
            try {
                const response = await fetchData(`/endpoints/allCategorie`);
                if (response) {
                    this.metaData = response;
                    this.updatedDescription = this.metaData.details;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        },
        
        openUpdateModal() {
            const modalElement = document.getElementById('updateModal');
            this.updateModalInstance = new bootstrap.Modal(modalElement);
            this.updateModalInstance.show();
        },
        
        async handleUpdate() {
            try {
                const updatedData = {
                    details: this.updatedDescription
                };
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
}
</script>
<style scoped>
.card{
    border-radius: 15px;
}
.card-header{
    background-color: #022D7E;
    color:white;
}
button{
    background-color: #28aabb;
    color:white;
}
</style>