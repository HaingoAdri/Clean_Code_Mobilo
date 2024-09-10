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
                                <th>Titres</th>
                                <th>Contenue</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                <td style="width:100px;">Introduction</td>
                                <td style="width:500px;"></td>
                                <td>
                                    <button class="btn m-2"><i class="bi bi-pen-fill"></i></button>
                                    <button class="btn"><i class="bi bi-file-earmark-x-fill"></i></button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '@/components/Menu.vue';
import Information_menu from '@/components/information_menu/Information_menu.vue';
export default {
    name:'Resultat-information',
    components: {
        Information_menu,
        Menu
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