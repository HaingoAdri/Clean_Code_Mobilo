<template>
    <div class="card">
        <div class="card-header rounded-bottom rounded-4">
            <h3 class="py-2">Endpoints categorie liste</h3>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <table class="table table-bordered">
                    <thead>
                        <th>Categorie</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Utilisateur authentification</td>
                            <td>Français</td>
                            <td style="width:450px;">FR</td>
                            <td>
                                <button class="btn"><i class="bi bi-eye-fill"></i></button>
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
export default {
    name:'Sous_categorie_vue'
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