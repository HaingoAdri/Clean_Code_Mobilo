<template>
    <div class="custom-container">
        <br>
        <Menu/>
        <br>
        <div class="row">
            <div class="col-4">
                <Information_menu/>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <h3>Vos informations</h3>
                        <hr>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Contenu</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in informations" :key="item.id">
                                    <td>{{ item.titre }}</td>
                                    <td v-html="item.details" style="width:500px;"></td>
                                    <td>
                                        <button @click="editItem(item)" class="btn m-2"><i class="bi bi-pen-fill"></i></button>
                                        <button @click="deleteItem(item.id)" class="btn"><i class="bi bi-file-earmark-x-fill"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal for Editing Information -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Éditer l'information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateItem">
                            <div class="mb-3">
                                <label for="modalTitle" class="form-label">Titre</label>
                                <input type="text" v-model="editForm.titre" class="form-control" id="modalTitle" required />
                            </div>
                            <div class="mb-3">
                                <label for="quillEditor" class="form-label">Contenu</label>
                                <div ref="quillEditor" class="quill-editor" style="height: 200px;"></div>
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
import Menu from '@/components/Menu.vue';
import Information_menu from '@/components/information_menu/Information_menu.vue';
import { fetchData, deleteData, putData } from '@/service/apiService';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import * as bootstrap from 'bootstrap';
export default {
    name: 'Resultat-information',
    components: {
        Information_menu,
        Menu
    },
    data() {
        return {
            informations: [],  // Variable pour stocker les données récupérées
            editForm: {
                id: null,
                titre: '',
                details: ''
            },
            quillEditor: null
        };
    },
    mounted() {
        this.loadInformations();
        this.initializeQuill();
    },
    methods: {
        async loadInformations() {
            try {
                this.informations = await fetchData('/information/allInformation'); // Assurez-vous que le chemin est correct
            } catch (error) {
                console.error('Erreur lors de la récupération des informations:', error);
            }
        },
        editItem(item) {
            this.editForm = { ...item };
            if (this.quillEditor) {
                this.quillEditor.root.innerHTML = item.details;
            }
            const modalElement = document.getElementById('editModal');
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        },
        async updateItem() {
            try {
                await putData(`/information/update_inforamtion/${this.editForm.id}`, {
                    titre: this.editForm.titre,
                    details: this.quillEditor.root.innerHTML
                });
                this.loadInformations();  // Recharger les informations après la mise à jour
                const modalElement = document.getElementById('editModal');
                const modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
            } catch (error) {
                console.error('Erreur lors de la mise à jour des informations:', error);
            }
        },
        async deleteItem(id) {
            try {
                await deleteData(`/information/delete_information/${id}`); // Assurez-vous que le chemin est correct
                this.loadInformations();  // Recharger les informations après la suppression
            } catch (error) {
                console.error('Erreur lors de la suppression des informations:', error);
            }
        },
        initializeQuill() {
            this.quillEditor = new Quill(this.$refs.quillEditor, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ color: [] }, { background: [] }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        ['link', 'image', 'video'],
                        ['blockquote', 'code-block'],
                        ['clean'] // remove formatting button
                    ],
                    table: true // Enable table module
                }
            });
        }
    }
};
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
button {
    border-radius: 10px;
    background-color: #022D7E;
    color: white;
}
.quill-editor {
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
