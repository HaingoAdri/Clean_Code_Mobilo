<template>
    <div class="custom-container">
        <br>
        <Menu/>
        <br>
        <div class="row">
            <div class="col-4">
                <ConfigurationMenuVue/>
            </div>
            <div class="col-8">
                <div class="card overflow-auto" style="height:300px;">
                    <div class="card-body">
                        <h3>Gerer la gestion des langues ici.</h3>
                        <hr>
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Langue :</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Exemple: Français"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Langue code :</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Exemple: FR"/>
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
        <Langue_vue/>
    </div>
</template>
<script>
import Menu from '@/components/Menu.vue';
import ConfigurationMenuVue from '@/components/ConfigurationMenu.vue';
import Langue_vue from '@/components/configuration_reponse/Langue_vue.vue';
export default {
    name:'ConfigurationMeta',
    components: {
        ConfigurationMenuVue,
        Menu,
        Langue_vue
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