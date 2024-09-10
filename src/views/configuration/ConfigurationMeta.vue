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
                <div class="card" style="height:300px;">
                    <div class="card-body">
                        <h3>Gerer la gestion de vos meta description ici.</h3>
                        <hr>
                        <form class="row g-3 py-2">
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Meta description :</label>
                                <textarea type="text" class="form-control" id="inputAddress2" placeholder="Exemple: Vous pouvez retrouver ici tous les articles relatifs au fonctionnement de la plateforme My.Mobilosoft en français."></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn mt-5">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <Meta_descriptionReponseVue/>
    </div>
</template>
<script>
import Menu from '@/components/Menu.vue';
import ConfigurationMenuVue from '@/components/ConfigurationMenu.vue';
import Meta_descriptionReponseVue from '@/components/configuration_reponse/Meta_descriptionReponse.vue';
export default {
    name:'ConfigurationMeta',
    components: {
        ConfigurationMenuVue,
        Menu,
        Meta_descriptionReponseVue
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