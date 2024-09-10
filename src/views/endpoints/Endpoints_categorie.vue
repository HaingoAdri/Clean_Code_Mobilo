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
                        <h3>Information sur les categories d'enpoints ici</h3>
                        <hr>
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Categorie :</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Exemple: User authentification"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Description :</label>
                                <textarea type="text" class="form-control" id="inputAddress2" placeholder="Exemple: FR"></textarea>
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
        <Endpoints_categorie_vue/>
    </div>
</template>
<script>
import MenuVue from '@/components/Menu.vue';
import Endpoints_menuVue from '@/components/endpoints_menu/Endpoints_menu.vue';
import Endpoints_categorie_vue from '../../components/endpoints_menu/reponse/Endpoints_categorie_reponse.vue';
export default {
    name: 'Endpoints_categorie',
    components: {
        MenuVue,
        Endpoints_menuVue,
        Endpoints_categorie_vue
    }
}
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