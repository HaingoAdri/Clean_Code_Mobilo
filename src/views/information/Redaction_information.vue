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
                        <h3>Écrivez vos informations ici</h3>
                        <hr>
                        <form @submit.prevent="handleSubmit" class="row g-3">
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Titre :</label>
                                <input type="text" v-model="titre" class="form-control" id="inputAddress2" placeholder="Exemple: Introduction"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Éditez votre contenu ici :</label>
                                <div ref="quillEditor" class="quill-editor" style="height: 200px;"></div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Information_menu from '@/components/information_menu/Information_menu.vue';
import { postData } from '@/service/apiService';  // Assurez-vous que le chemin est correct

export default {
    name: 'RedactionInformation',
    components: {
        Information_menu,
        Menu
    },
    data() {
        return {
            titre: '',
            quillEditor: null
        };
    },
    mounted() {
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
                    ['clean'], // remove formatting button
                ],
                table: true, // Enable table module
            },
        });
    },
    methods: {
        async handleSubmit() {
            const details = this.quillEditor.root.innerHTML; // Get the content from the editor
            const data = {
                titre: this.titre,
                details: details  // Use 'details' instead of 'content'
            };

            try {
                await postData('/information/save_information', data); // Update the endpoint if needed
                alert('Information enregistrée avec succès!');
                this.titre = '';  // Clear the form fields
                this.quillEditor.root.innerHTML = '';  // Clear the editor content
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement des informations:', error);
            }
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
</style>
