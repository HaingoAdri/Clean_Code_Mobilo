<template>
    <div class="custom-container">
        <br>
        <MenuVue/>
        <br>
        <div class="row">
            <div class="col-4">
                <Endpoints_menuVue/>
            </div>
            <div class="col-8">
                <div class="card" style="height: 350px;">
                    <div class="card-body">
                        <h3>Introduction sur les endpoints ici</h3>
                        <hr>
                        <form @submit.prevent="handleSubmit" class="row g-3">
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Détails :</label>
                                <textarea v-model="details" class="form-control" id="inputAddress2" placeholder="Exemple: Introduction sur la définition d'endpoints."></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <Introduction_reponseVue :titre=this.titre />
    </div>
</template>

<script>
import MenuVue from '@/components/Menu.vue';
import Endpoints_menuVue from '@/components/endpoints_menu/Endpoints_menu.vue';
import Introduction_reponseVue from '../../components/endpoints_menu/reponse/Introduction_reponse.vue';
import { postData } from '@/service/apiService';

export default {
    name: 'Introduction_vue',
    components: {
        MenuVue,
        Endpoints_menuVue,
        Introduction_reponseVue
    },
    data() {
        return {
            titre: 'endpoints',
            details: ''
        };
    },
    methods: {
        async handleSubmit() {
            const data = {
                titre: this.titre,
                details: this.details
            };

            try {
                await postData('/information/save_information', data);
                alert('Détails enregistrés avec succès !');
                this.titre = 'endpoints';
                this.details = '';
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement des détails:', error);
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

.card{
    border-radius:15px;
}
button{
    border-radius:10px;
    background-color: #022D7E;
    color:white;
}
</style>
