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
                        <h3>Ecriver vos information ici</h3>
                        <hr>
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Titre :</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Exemple: Introduction"/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Editer votre contenue ici :</label>
                                <Editeur_Quillfrom/>
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
import Information_menu from '@/components/information_menu/Information_menu.vue';
import Editeur_Quillfrom from '@/components/information_menu/EditeurQuill.vue';
export default {
    name:'RedactionInformation',
    components: {
        Information_menu,
        Menu,
        Editeur_Quillfrom
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