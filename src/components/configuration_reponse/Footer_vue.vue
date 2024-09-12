<template>
    <div class="card" v-if="footer">
        <div class="card-header rounded-bottom rounded-4 d-flex justify-content-between">
            <h3 class="py-2">Footer actuelle</h3>
            <div class="a">
                <button class="btn m-2" @click="editFooter"><i class="bi bi-pen-fill"></i></button>
                <!--<button class="btn" @click="deleteFooter"><i class="bi bi-file-earmark-x-fill"></i></button>-->
            </div>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>Footer details : 
                    <span v-if="!editMode">{{ footer.texte }}</span>
                    <input v-else v-model="updatedFooter.texte" />
                </p>
                <p>Version: 
                    <span v-if="!editMode">{{ footer.version }}</span>
                    <input v-else v-model="updatedFooter.version" />
                </p>
                <button v-if="editMode" @click="updateFooter">Enregistrer</button>
            </blockquote>
        </div>
    </div>
    <p v-else>Chargement...</p>
</template>

<script>
import { fetchData, putData, deleteData } from '@/service/apiService';

export default {
    name: 'Footer_vue',
    data() {
        return {
            footer: null,
            editMode: false,
            updatedFooter: {
                texte: '',
                version: ''
            }
        };
    },
    mounted() {
        this.loadFooter();
    },
    methods: {
        async loadFooter() {
            try {
                this.footer = await fetchData('/configuration/getFooter');
                if (this.footer) {
                    // Initialisez les valeurs à éditer
                    this.updatedFooter = { ...this.footer };
                }
            } catch (error) {
                console.error('Erreur lors de la récupération du footer :', error);
            }
        },
        editFooter() {
            this.editMode = !this.editMode; // Alternez entre mode édition et affichage
        },
        async updateFooter() {
            try {
                await putData(`/configuration/update_footer/${encodeURIComponent(this.footer.texte)}`, this.updatedFooter);
                this.footer = { ...this.updatedFooter };
                this.editMode = false;
            } catch (error) {
                console.error('Erreur lors de la mise à jour du footer :', error);
            }
        },
        async deleteFooter() {
            try {
                await deleteData(`/configuration/delete_footer/${encodeURIComponent(this.footer.texte)}`);
                this.footer = null; // Efface les données après suppression
            } catch (error) {
                console.error('Erreur lors de la suppression du footer :', error);
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
input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
}
</style>
